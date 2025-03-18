import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MusicType } from "@/data/musicTypes";
import NeumorphicButton from "./NeumorphicButton";
import coverimage from "@/assets/assets.jpeg";
import { Song } from "./Index";

interface Props {
  musicData: MusicType[];
  setTabSelected: any;
  playSound: any;
  currentSong?: Song;
  isPlaying: boolean;
  handlePlayPause: Function;
}

const MusicList = ({
  musicData,
  setTabSelected,
  playSound,
  currentSong,
  isPlaying,
  handlePlayPause,
}: Props) => {
  return (
    <View className="h-screen">
      <Text className="text-center mt-3 text-white font-semibold text-sm">
        &copy; TYFIA RAK • 2025
      </Text>
      <View className="my-16">
        <View className="flex items-center flex-row justify-between px-7">
          <NeumorphicButton
            icon="heart"
            style="p-4 bg-gray-700"
            onPress={() => null}
          />
          <View className="rounded-full border-2 border-[#2a2d2fcd] shadow-inner shadow-gray-700">
            {currentSong && (
              <Image
                source={
                  currentSong.song.artwork
                    ? { uri: currentSong.song.artwork }
                    : coverimage
                }
                alt="image"
                className="rounded-full shadow-lg shadow-black w-52 h-52"
              />
            )}
          </View>
          <NeumorphicButton
            icon="ellipsis-horizontal"
            style="p-4 bg-gray-700"
            onPress={() => setTabSelected("playing")}
          />
        </View>
      </View>
      <ScrollView>
        <View className="px-4">
          {musicData.map((music, index) => (
            <TouchableOpacity
              onPress={() => playSound(index)}
              key={music.id}
              className={`rounded-2xl ${
                currentSong?.index === index
                  ? "bg-black border-2 border-[#2a2d2fcd] shadow-inner shadow-gray-800"
                  : "bg-transparent border-0 shadow-none"
              }`}
            >
              <View
                className={`rounded-2xl flex-row justify-between items-center px-4 py-5 ${
                  currentSong?.index === index && "border border-[#2a2d2fcd]"
                }`}
              >
                <View className="max-w-[80%]">
                  <Text className="text-white text-xl">{music.title}</Text>
                  <Text className="text-gray-300 text-sm">{music.artist}</Text>
                </View>
                <NeumorphicButton
                  icon={
                    currentSong?.index === index && isPlaying ? "pause" : "play"
                  }
                  style={`p-3 w-[40px] ${
                    currentSong?.index === index
                      ? "bg-orange-700"
                      : "bg-gray-700"
                  }`}
                  onPress={() => handlePlayPause(index)}
                  iconSize={18}
                  showShadow={false}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MusicList;
