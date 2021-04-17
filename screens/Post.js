import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../shared/Card";

const Post = ({ img, title, description }) => {
  const navigation = useNavigation();
  const maxDescriptionLitmit = 250;
  const handlePress = () => {
    navigation.navigate("postdetails", { img, title, description });
  };

  return (
    <View>
      <Card>
        <Pressable onPress={handlePress}>
          <View style={styles.root}>
            <Image style={styles.img} source={img} />
            <Text>{title || "hi"}</Text>
            <Text>{description.substr(0, maxDescriptionLitmit)}...</Text>
          </View>
        </Pressable>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "75%",
    height: "250px",
  },
});
export default Post;
