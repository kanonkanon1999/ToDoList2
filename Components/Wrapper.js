import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';


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
