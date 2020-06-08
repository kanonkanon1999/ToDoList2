import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View} from 'react-native';


export default function Wrapper({children}) {
  return (
      <TouchableWithoutFeedback onPress={() =>
        Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  
});
