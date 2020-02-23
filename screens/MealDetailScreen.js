import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MealDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go Back to Start"
        onPress={() => {
          // Going back to the first screen of the stack.
          props.navigation.popToTop();
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
