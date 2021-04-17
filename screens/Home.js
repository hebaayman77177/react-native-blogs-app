import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";

const Home = (props) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("posts");
  };

  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Get Posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  link:{
      backgroundColor:""
  }
});

export default Home;
