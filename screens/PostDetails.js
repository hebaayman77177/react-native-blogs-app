import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/Card";
import { useRoute } from "@react-navigation/native";

const PostDetails = () => {
  const route = useRoute();
  const img = route.params.img;
  const title = route.params.title;
  const description = route.params.description;
  console.log("🚀 ~ file: Post.js ~ line 6 ~ Post ~ description", description);
  return (
    <View>
      <Card>
        <View style={styles.root}>
          <Image style={styles.img} source={img} />
          <Text>{title || "hi"}</Text>
          <Text>{description}</Text>
        </View>
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
export default PostDetails;
