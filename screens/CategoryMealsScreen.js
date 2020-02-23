import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen(props) {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title} Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />

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
