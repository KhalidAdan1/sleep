import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import 'nativewind';
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import InputField from "../components/InputField";



const SignIn = () => {
  
  return (
        <LinearGradient
                colors={['#100043', '#6B40F8']}
                className="flex-1"
              >
                <SafeAreaView className="flex justify-center items-center flex-1">
         <TouchableOpacity className="absolute top-12 left-3 p-5 rounded-full"
                  onPress={() => {
                    router.replace('/(auth)/welcome');
                  } }>
                    <Icon name="arrow-back-outline" size={36} color="#CAC4C4" />
                </TouchableOpacity>
                <View className="absolute top-32">
                <Text className="text-white text-3xl left-8">
                  Welcome Back
                </Text>
                <Text className="text-gray-500 text-xl ">Let's pick up where you left off</Text>
                </View>
                <View>
                  <InputField 
                  label='Name',
                  placeholder='Enter your name'
                  />
                </View>
               </SafeAreaView>
                </LinearGradient>
    );
};

export default SignIn;