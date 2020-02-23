import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import Colors from "../constants/colors";

export default function CategoriesScreen(props) {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
}

// Adding special navigation property to the CategoriesScreen function.
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderColor: Colors.accentColor,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
