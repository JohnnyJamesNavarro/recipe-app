import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor:
      //       Platform.OS === "android" ? Colors.primaryColor : "white"
      //   },
      //   headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
      // }
    },
    MealDetail: MealDetailScreen
  },
  {
    // This default navigationOptions get merged with the navigationOptions in each screen components.
    // defaultNavigationOptions get overwritten by the ones on the screen component.
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
    // With initialRouteName you can change the default initial screen for the stack.
    //initialRouteName: "MealDetail"
  }
);

export default createAppContainer(MealsNavigator);
