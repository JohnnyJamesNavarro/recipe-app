import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CategoryMealsScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
