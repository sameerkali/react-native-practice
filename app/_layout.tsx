import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
  <Stack>
    <Stack.Screen name="index" />
    <Stack.Screen name="(tabs)"  options={{headerShown: false}}/>
  </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({
    home: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });