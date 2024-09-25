import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const settings = () => {
    const params = useLocalSearchParams()
    console.log("params:", params)
  return (
    <View style={styles.home}>
      <Text> I am settings</Text>
     <Link href={'/profile'}>profile</Link>
     <Text>{params.name}</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
