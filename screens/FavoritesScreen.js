import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen(props) {
  const displayedMeals = MEALS.filter(
    meal => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
}

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
