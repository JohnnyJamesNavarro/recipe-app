import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );

      // if the item exists within favoriteMeals, i.e.: the index is different than -1, remove the item
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      }

      // else, we add the item to favorite meals
      else {
        const newFavoritedMeal = state.meals.find(
          meal => meal.id === action.mealId
        );

        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(newFavoritedMeal) // concat() creates a new array holding the previous data and adding the new specified one
        };
      }
  }
  return state;
};

export default mealsReducer;
