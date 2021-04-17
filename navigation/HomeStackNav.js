import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import Post from "../screens/Post";
import PostDetails from "../screens/PostDetails";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStackNav() {
  return (
    <Navigator>
      {/* <Screen name="homescreen" component={Home} /> */}

      <Screen name="posts" component={Posts} />
      <Screen name="postdetails" component={PostDetails} />
    </Navigator>
  );
}
