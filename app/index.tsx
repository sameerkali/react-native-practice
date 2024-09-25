import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";


const index = () => {
  return (
    <View style={styles.home}>
      <Text>I am index</Text>
      <Link href={`/settings?name=sameer`}><Text>open settings</Text></Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
