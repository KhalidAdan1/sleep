import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "nativewind";

const Habits = () => {
  
  return (
    <SafeAreaView className="flex justify-center items-center flex-1">
      <Text className="text-red-700 flex justify-center items-center flex-auto">Habits</Text>
    </SafeAreaView>
  );
};

export default Habits;