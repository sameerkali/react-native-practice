import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";

const settings = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  console.log("params:", params);
  return (
    <View style={styles.home}>
      <Text> I am settings</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("(tabs)", {
            name: "sameer faridi"
          });
        }}
      >
        <Text>Open Profile</Text>
      </TouchableOpacity>
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
