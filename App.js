import React from 'react';
import { StyleSheet,  View, KeyboardAvoidingView,} from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';
import Footer from './Components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      <Wrapper>
        <Header/>
      </Wrapper>
        <ToDoListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    flex:1,
    backgroundColor:'#f9dfd5'
  },
});
