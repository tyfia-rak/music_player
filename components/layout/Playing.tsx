import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import NeumorphicButton from './NeumorphicButton'

const Playing = () => {
  return (
    <View className='h-screen'>
        <View className='flex-row justify-between mx-7 items-center mt-7'>
            <NeumorphicButton icon='arrow-back' onPress={()=>null}/>
        </View>
    </View>
  )
}

export default Playing