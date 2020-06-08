import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';


export default function App() {
  return (
    <View style={styles.container}>
      <Wrapper>
        <Header/>
      </Wrapper>
      <KeyboardAvoidingView>
        <ToDoListItem/>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
