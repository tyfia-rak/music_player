import React from 'react'
import"../global.css"
import Index from '@/components/layout/Index'
import { StatusBar } from 'react-native'


const _layout = () => {
  return(
    <>
      <Index/>
      <StatusBar barStyle={"light-content"}/>
    </>
  ) 
}

export default _layout