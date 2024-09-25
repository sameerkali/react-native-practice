import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const profile = () => {
  const route = useRouter();
  return (
    <View style={styles.home}>
      <Text>I am profile</Text>
      <TouchableOpacity
        onPress={() => {
          route.back();
        }}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
