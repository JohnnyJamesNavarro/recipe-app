import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function CategoryMealsScreen(props) {
  const categoryId = props.navigation.getParam("categoryId");

  // Get a "slice" of state from the redux store
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
}

// navigationOptions can be a function instead of an object when workin with a screen that changes dinamically.
CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title
  };
};
