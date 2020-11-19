import React from "react"
import HomeScreen from "../screen/HomeScreen"

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MainStackNav = createStackNavigator({
    HomeScreen: {screen: HomeScreen}
})

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default createAppContainer(MainStackNav);