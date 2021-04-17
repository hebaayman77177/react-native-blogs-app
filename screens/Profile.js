import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Card from "../shared/Card";

const Profile = (props) => {
  const navigation = useNavigation();
  const profile = {
    name: "heba",
    desc: "web developer",
  };
  const handlePress = () => {
    navigation.navigate("editprofile", { profile });
  };
  return (
    <View>
      <Card>
        <Text>{profile.name}</Text>
        <Text>{profile.desc}</Text>
        <Text>Skills</Text>
        <Button onPress={handlePress} title="Edit Profile" color="#841584" />
      </Card>
    </View>
  );
};

export default Profile;
