import React, {useState} from 'react';
import {TextInput} from 'react-native';

export const UselessTextInput = (props) => {
  const [value, onChangeText] = useState('');
  return (
    <TextInput
      onChangeText={(text) => onChangeText(text)}
      clearButtonMode="while-editing"
      keyboardAppearance="dark"
      placeholder={props.text}
      value={value}
    />
  );
};
