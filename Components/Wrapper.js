import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity} from 'react-native';


export default function Wrapper({children}) {
  return (
      <TouchableOpacity onPress={Keyboard.dismiss}　activeOpacity={1}>
        {children}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
});
