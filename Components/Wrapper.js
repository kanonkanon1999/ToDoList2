import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View} from 'react-native';


export default function Wrapper({childern}) {
  return (
      <TouchableWithoutFeedback onPress={() =>
        Keyboard.dismiss()}>
        {childern}
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  
});
