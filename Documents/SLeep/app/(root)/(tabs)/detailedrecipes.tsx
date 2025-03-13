import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const detailedRecipes = () => {

  return (
    <SafeAreaView className="flex justify-center items-center flex-1">
      <Text className="text-blue-200">Recipes</Text>
    </SafeAreaView>
  );
};

export default detailedRecipes;