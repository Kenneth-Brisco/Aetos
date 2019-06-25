import React from "react";
import { Icon } from 'react-native-elements'
import { TextInput, View } from "react-native";

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  name,
  type,
  color
}) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon name={name} type={type} color={color} size={30} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
