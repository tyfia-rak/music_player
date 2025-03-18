import React, { useCallback, useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import MusicList from "./MusicList";
import Playing from "./Playing";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio, AVPlaybackStatus } from "expo-av";
import { MusicType } from "@/data/musicTypes";

export interface Song {
  song: MusicType;
  index: number;
}

const Index = () => {
  const [tabSelected, setTabSelected] = useState<"list" | "playing">("playing");
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [musicData, setMusicData] = useState<MusicType[]>([]);
  const [currentSong, setCurrentSong] = useState<Song>();

  useEffect(() => {
    const fetchMusicFiles = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: MediaLibrary.MediaType.audio,
          first: 100,
        });
        const formattedMusic = media.assets.map((item) => ({
          id: item.id,
          title: item.filename,
          artist: "Unknown Artist",
          artwork: item.uri,
          uri: item.uri,
        }));
        setCurrentSong({ song: formattedMusic[0], index: 0 });
        setMusicData(formattedMusic);
      }
    };
    fetchMusicFiles();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis || 1);
          if (status.didJustFinish) {
            handleNext();
          }
        }
      });
    }
  }, [sound]);

  const playSound = async (index: number) => {
    if (sound) await sound.unloadAsync();
    if (!musicData[index]) return;

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: musicData[index].uri },
      { shouldPlay: true }
    );

    setSound(newSound);
    setCurrentSong({ song: musicData[index], index: index });
    setIsPlaying(true);
  };

  const handlePlayPause = useCallback(
    async (index: number) => {
      if (!sound) return;

      const status = await sound.getStatusAsync();
      if (!status.isLoaded) return;

      if (currentSong?.index === index) {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      } else {
        await playSound(index);
      }
    },
    [currentSong, isPlaying, sound, playSound]
  );

  const handleNext = useCallback(() => {
    if (musicData.length === 0) return;
    else if (currentSong) {
      const nextIndex = (currentSong?.index + 1) % musicData.length;
      playSound(nextIndex);
    }
  }, [currentSong, musicData]);

  const handlePrev = useCallback(() => {
    if (musicData.length === 0) return;
    else if (currentSong) {
      const prevIndex =
        currentSong.index - 1 < 0
          ? musicData.length - 1
          : currentSong.index - 1;
      playSound(prevIndex);
    }
  }, [currentSong, musicData]);

  const handleSeek = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  return (
    <>
      <LinearGradient colors={["#212528", "#111315"]}>
        <SafeAreaView>
          {tabSelected === "list" ? (
            <MusicList
              musicData={musicData}
              setTabSelected={setTabSelected}
              playSound={playSound}
              currentSong={currentSong}
              isPlaying={isPlaying}
              handlePlayPause={handlePlayPause}
            />
          ) : (
            <Playing
              setTabSelected={setTabSelected}
              currentSong={currentSong}
              handlePlayPause={handlePlayPause}
              isPlaying={isPlaying}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleSeek={handleSeek}
              duration={duration}
              position={position}
            />
          )}
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Index;
