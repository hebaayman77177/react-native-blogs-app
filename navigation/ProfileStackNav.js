import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";

const { Navigator, Screen } = createStackNavigator();

export default function ProfileStackNav() {
  return (
    <Navigator>
      {/* <Screen name="homescreen" component={Home} /> */}
      <Screen name="profile" component={Profile} />
      <Screen name="editprofile" component={EditProfile} />
    </Navigator>
  );
}
