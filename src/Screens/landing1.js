import { View, Text } from 'react-native'
import React from 'react'

export default function landing1() {

  return (
    <View style ={{flex: 1,justifyContent: "center", alignItems: "center"}}>
      <Text style= {{fontWeight: "bold", fontSize: 20}}>{`welcome! you are logged in`}</Text>
    </View>
  )
}