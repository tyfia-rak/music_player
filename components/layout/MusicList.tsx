import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MusicType } from "@/data/musicTypes";
import { Entypo, Ionicons } from "@expo/vector-icons";
import NeumorphicButton from "./NeumorphicButton";
import coverimage from "@/assets/assets.jpeg";

interface Props {
  musicData: MusicType[];
  setTabSelected: any;
}

const MusicList = ({ musicData, setTabSelected }: Props) => {
  return (
    <View className="h-screen">
      <Text className="text-center mt-3 text-white font-semibold text-sm">
        EVOL • FUTURE
      </Text>
      <View className="my-16 ">
        <View className="flex items-center flex-row justify-between px-7">
          <NeumorphicButton
            icon="heart"
            style="p-4 bg-gray-700"
            onPress={() => null}
          />
          <View className="rounded-full border-2 border-[#2a2d2fcd] shadow-inner shadow-gray-700 mx-auto ">
            <Image
              source={coverimage}
              alt="image"
              width={150}
              height={150}
              className="rounded-full shadow-lg shadow-black w-52 h-52"
            />
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
          {musicData.map((music) => (
            <TouchableOpacity
              onPress={() => null}
              key={music.id}
              className="flex-row justify-between items-center px-4 py-5 rounded-2xl"
            >
              <View>
                <Text className="text-white text-xl">{music.title}</Text>
                <Text className="text-gray-300 text-sm">{music.artist}</Text>
              </View>
              <NeumorphicButton
                icon="play"
                style="p-2 bg-gray-800"
                onPress={() => null}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MusicList;
