import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const settings = () => {
  return (
    <View style={styles.home}>
      <Text> I am settings</Text>
     <Link href={'/profile'}>profile</Link>
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
