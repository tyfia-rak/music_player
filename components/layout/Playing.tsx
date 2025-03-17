import { View, Text, Image } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import NeumorphicButton from './NeumorphicButton'
import coverimage from '@/assets/assets.jpeg'
import Slider from '@react-native-community/slider';

const Playing = () => {
  return (
    <View className='h-screen'>
        <View className='flex-row justify-between mx-7 items-center mt-7'>
            <NeumorphicButton icon='arrow-back' onPress={()=>null} padding={"4"}/>
                <Text className='text-center text-white font-semibold text-sm uppercase'>
                    playing now
                </Text>
                <NeumorphicButton icon='menu' onPress={() => null} padding={"4"}/>
        </View>
        <View className='items-center mt-20 rounded-full border-2 boder-[#2a2d2fcd] shadow-inner shadow-gray-700 mx-auto'>
            <Image source={coverimage}  alt='image' width={250} height={250} className='rounded-full shadow-lg shadow-black'/>
        </View>
        <View className='mt-20 '>
            <Text className='text-center text-4xl text-white font-semibold mb-1'>Song Title</Text>
            <Text className='text-center text-sm text-gray-400 font-semibold mb-1'>Song artist name</Text>
        </View>
        <View className='mb-8 mt-20 px-7'>
            <Slider minimumValue={0} maximumValue={3} value={1} onSlidingComplete={()=> null} minimumTrackTintColor='#e17645' maximumTrackTintColor='#4a4a4a' thumbTintColor='#e17645'/>
        </View>
        <View className='flex-row justify-between mt-2 px-7'>
            <Text className='text-gray-400'>1:24</Text>
            <Text className='text-gray-400'>3:54</Text>
        </View>
        <View className='flex-row justify-evenly mx-7 items-center'>
            <NeumorphicButton icon='play-skip-back' onPress={()=>null} padding={"6"}/>
            <NeumorphicButton icon='pause' onPress={()=>null} padding={"6"} color="orange-500"/>
            <NeumorphicButton icon='play-skip-forward' onPress={()=>null} padding={"6"}/>
        </View>
    </View>
  )
}

export default Playing