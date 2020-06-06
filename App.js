import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ToDoListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9efeb',
  },
});
