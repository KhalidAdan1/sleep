import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";

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
                      <View>
                      <Icon name="arrow-back-outline" size={36} color="#CAC4C4" />
                      </View>
                  </TouchableOpacity>
                  <View className="absolute top-32">
                  </View>
                 </SafeAreaView>
                  </LinearGradient>
  );
};

export default SignIn;