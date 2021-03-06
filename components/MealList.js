import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite: isFavorite
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />

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
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});
