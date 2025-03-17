import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MusicList from './MusicList';
import Playing from './Playing';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { musicData } from '@/data/music';

const Index = () => {
  const [tabSelected,setTabSelected] = useState<"list" | "playing">("playing");
  return (
    <>
    <LinearGradient colors={["#212528","#111315"]}>
      <SafeAreaView>
        {tabSelected === "list" ? <MusicList musicData={musicData}/> : <Playing/>}
      </SafeAreaView>
    </LinearGradient>
    </>
  )
}

export default Index