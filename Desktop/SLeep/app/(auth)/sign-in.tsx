import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "nativewind";
import { router } from "expo-router";

const SignIn = () => {
  
  return (
    <SafeAreaView className="flex justify-center items-center flex-1">
          <Text className="text-red-700 flex justify-center items-center flex-auto">Sign in</Text>
           <TouchableOpacity className="w-full flex justify-center"
                    onPress={() => {
                      router.replace('/(auth)/welcome');
                    } }>
                    <Text className=" text-lg">
                      Get Started
                    </Text>
                  </TouchableOpacity>
        </SafeAreaView>
  );
};

export default SignIn;