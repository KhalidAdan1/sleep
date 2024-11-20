import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "nativewind";

const Home = () => {
  
  return (
    <SafeAreaView className="flex justify-center items-center flex-1">
      <Text className="text-red-700 flex justify-center items-center flex-auto">Home</Text>
    </SafeAreaView>
  );
};

export default Home;