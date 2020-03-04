import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButtom from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

import Colors from "../constants/colors";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export default function MealDetailScreen(props) {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector(state => state.meals.meals);
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>

      {selectedMeal.ingredients.map(i => (
        <ListItem key={i}>{i}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>

      {selectedMeal.steps.map(s => (
        <ListItem key={s}>{s}.</ListItem>
      ))}

      {/* <View>
        <Text>{selectedMeal.title}</Text>
        <Button
        title="Go Back to Start"
        onPress={() => {
          // Going back to the first screen of the stack.
          props.navigation.popToTop();
        }}
      />
      </View> */}
    </ScrollView>
  );
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFavorite");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtom}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    color: Colors.primaryColor
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.accentColor,
    borderWidth: 1,
    padding: 10
  }
});
