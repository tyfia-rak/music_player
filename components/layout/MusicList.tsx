import { View, Text } from 'react-native'
import React from 'react'
import { MusicType } from '@/data/musicTypes'

interface Props{
    musicData: MusicType
}

const MusicList = ({musicData} : Props) => {
  return (
    <View className='flex h-screen items-center justify-center'>
      <Text className='text-3xl font-semibold'>this is music list</Text>
    </View>
  )
}

export default MusicList