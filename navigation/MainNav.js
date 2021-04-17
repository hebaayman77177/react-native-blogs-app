import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNav from "./HomeStackNav";
import Profile from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export default function MainNav() {
  return (
    <Navigator>
      <Screen name="home" component={HomeStackNav} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
