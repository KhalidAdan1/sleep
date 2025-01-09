import { Text, TouchableOpacity, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "nativewind";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {TailwindProvider} from "tailwindcss-react-native"



const OnBoarding = () => {
  
  return (
   <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={['#100043', '#6B40F8']}
        className="flex-1"
      >
      <SafeAreaView className="flex">
        <Text className="flex text-7xl flex-auto text-white">Ready to change 
          the way you {'\n'}
          sleep? 
        </Text>
        <View className="max-w-md top-44">
        <TouchableOpacity className="max-w-md py-4 bg-blue-500 rounded-xl
                   flex items-center justify-center mx-6"
                   activeOpacity={0.8}
          onPress={() => {
            router.replace('/(auth)/sign-up');
          } }>
            
          <Text className="text-white text-2xl text-center">
            Get Started
          </Text>
        </TouchableOpacity>    
        <View className=" max-w-md top-5">
      <TouchableOpacity className="max-w-md py-4 bg-blue-500 rounded-xl
                   flex items-center justify-center mx-6" >
<Text className="text-white text-2xl text-center">
  Continue With Google
</Text>

      </TouchableOpacity>
      </View>
      <View className="mt-10">
      <TailwindProvider>
      <View className="flex-row items-center my-4">
       
        <View className="flex-1 h-0.5 bg-gray-300 mx-6" />
        
      
        <Text className="px-4 text-gray-400 font-medium text-lg">OR</Text>
        <View className="flex-1 h-0.5 bg-gray-300 mx-6" />
      </View>
    </TailwindProvider>
    </View>
    <View className="flex-row items-center justify-center p-2">
      <Text className="text-white text-2xl flex items-center justify-center ">
          Already have an Account?
          </Text>
          <TouchableOpacity
      className="flex items-center justify-center"
      onPress={() => {
        router.push('/(auth)/sign-in')
      }}
      >
        <Text className="text-blue-400 text-2xl pl-2">
      Log in
    </Text>
      </TouchableOpacity>
      
      </View>
      </View>
      </SafeAreaView>
     </LinearGradient>
    </>
  );
};

export default OnBoarding;