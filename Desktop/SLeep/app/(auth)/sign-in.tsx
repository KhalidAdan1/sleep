import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import 'nativewind';
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from "react";
import InputField from "../components/InputField";



const SignIn = () => {
  const [form , setForm]= useState({
    name: '',
    email: '',
    password: '',
   }
   );
  return (
        <LinearGradient
                colors={['#100043', '#6B40F8']}
                className="flex-1"
              >
                
                <SafeAreaView className=" justify-center items-center flex-1">
       <TouchableOpacity className="absolute top-12 left-3 p-5 rounded-full"
                onPress={() => {
                  router.replace('/(auth)/welcome');
                } }>
                  <Icon name="arrow-back-outline" size={36} color="#CAC4C4" />
              </TouchableOpacity>
              <View className="absolute top-28 flex w-full">
      
              <Text className="text-white text-3xl left-20">
                Welcome Back
              </Text>
              <Text className="text-gray-500  text-xl left-14 ">Let's pick where you left off</Text>
             
              <View className="w-full mt-20 px-6">
                  <InputField 
                  label='Email'
                  placeholder='Enter Your Email'
                  value={form.email}
                  labelStyle="text-gray-500"
                
                  onChangeText={(value)=>{
                    setForm({...form ,
                      email: value
                    })
                  }}
                  />
                  <InputField 
                  label='Password'
                  placeholder='Enter Your Password'
                  value={form.password}
                  secureTextEntry={true}
                  onChangeText={(value)=>{
                    setForm({...form ,
                      password: value
                    })
                  }}
                  />
                </View>
                </View>
             </SafeAreaView>
                </LinearGradient>
    );
};

export default SignIn;