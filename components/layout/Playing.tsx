import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import NeumorphicButton from "./NeumorphicButton";
import coverimage from "@/assets/assets.jpeg";
import Slider from "@react-native-community/slider";
interface Props {
  setTabSelected: any;
}

const Playing = ({ setTabSelected }: Props) => {
  return (
    <View className="h-screen">
      <View className="flex-row justify-between mx-7 items-center mt-7">
        <NeumorphicButton
          icon="arrow-back"
          onPress={() => null}
          style="p-4 bg-gray-700"
        />
        <Text className="text-center text-white font-semibold text-sm uppercase">
          playing now
        </Text>
        <NeumorphicButton
          icon="menu"
          onPress={() => setTabSelected("list")}
          style="p-4 bg-gray-700"
        />
      </View>
      <View className="items-center mt-20 rounded-full border-2 border-[#2a2d2fcd] shadow-inner shadow-gray-700 mx-auto">
        <Image
          source={coverimage}
          alt="image"
          width={250}
          height={250}
          className="rounded-full shadow-lg shadow-black"
        />
      </View>
      <View className="mt-20 ">
        <Text className="text-center text-4xl text-white font-semibold mb-1">
          Song Title
        </Text>
        <Text className="text-center text-sm text-gray-400 font-semibold mb-1">
          Song artist name
        </Text>
      </View>
      <View className="mb-8 mt-20 px-7">
        <Slider
          minimumValue={0}
          maximumValue={3}
          value={1}
          onSlidingComplete={() => null}
          minimumTrackTintColor="#e17645"
          maximumTrackTintColor="#4a4a4a"
          thumbTintColor="#e17645"
        />
      </View>
      <View className="flex-row justify-between mt-2 px-7">
        <Text className="text-gray-400">1:24</Text>
        <Text className="text-gray-400">3:54</Text>
      </View>
      <View className="flex-row justify-evenly mx-7 items-center">
        <NeumorphicButton
          icon="play-skip-back"
          onPress={() => null}
          style="p-6 bg-gray-700"
        />
        <NeumorphicButton
          icon="pause"
          onPress={() => null}
          style="p-6 bg-orange-700"
        />
        <NeumorphicButton
          icon="play-skip-forward"
          onPress={() => null}
          style="p-6 bg-gray-700"
        />
      </View>
    </View>
  );
};

export default Playing;
