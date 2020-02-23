import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoryMealsScreen(props) {
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />

      {/* <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      /> */}

      {/* <Button
        title="Button to Go Back Manually"
        onPress={() => {
          // Force going back if you ever need to do it after performing some action.
          // props.navigation.goBack();
          props.navigation.pop(); // Does the samething as goBack().
        }}
      /> */}
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
