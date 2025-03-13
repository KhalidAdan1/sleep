
import React from "react";
import { Text, TouchableOpacity } from "react-native";


interface ButtonProps {
    onPress: () => void;
    isLoading?: boolean;
    title?: string;
    className?:string;
}

const Button = ({
    onPress,
    isLoading,
    className,
    title,
    ...props
}:ButtonProps) =>{
    return(
    <TouchableOpacity
      onPress={onPress}
      className='text-slate-400'
      {...props}
    >
      <Text className='text-slate-400'>
        {title}
      </Text>
    </TouchableOpacity>
    )
}

export default Button;