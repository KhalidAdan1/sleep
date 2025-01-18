import React from "react";
import { KeyboardAvoidingView, Text, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";

const InputField = ({ label }) =>{
 <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
        <View>
            <Text>
        {label}
            </Text>
        </View>
    </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
}
export default InputField;