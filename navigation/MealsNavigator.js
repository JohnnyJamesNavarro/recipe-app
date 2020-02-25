import React from "react";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";

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
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        maxWidth: 275 // Fixing header titles that are way to long.
      },
      headerBackTitleStyle: {
        // This is for ios only.
        fontFamily: "open-sans"
      }
    }
    // With initialRouteName you can change the default initial screen for the stack.
    //initialRouteName: "MealDetail"
  }
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        maxWidth: 275
      },
      headerBackTitleStyle: {
        // This is for ios only.
        fontFamily: "open-sans"
      }
    }
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      //tabBarLabel: "bruh", Using a custom label, by default react navigation uses the identifier.
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor, //tabBarColor only works when shifting is true.
      // This workaround is needed because there's no built-in way of modifying label styles in the android createMaterialBottomTabNavigator.
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        )
    }
  }
};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true
        // barStyle: { Setting the color for the entire tab bar without shifting.
        //   backgroundColor: Colors.primaryColor
        // }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            // ios does have a built-in way of modifying label styles.
            fontFamily: "open-sans-bold"
          },
          activeTintColor: Colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilterScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitleStyle: {
        maxWidth: 275
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsTabs: {
      screen: MealsTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
