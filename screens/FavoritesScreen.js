import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { useSelector } from "react-redux";

export default function FavoritesScreen(props) {
  // Getting the favorite meals from the redux store
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
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
