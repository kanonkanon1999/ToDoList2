import React from 'react';
import { StyleSheet,  View,} from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';

export default class App extends React.Component{
  state = {
    todoList: [],
  };
  
  addTodo = text => {
    const list =[].concat(...this.state.todoList);
    list.push({
        key: `${Date.now()}`,
        name: text,
        isDone: false,
    });
    this.setState({
        todoList:list,
    });
  };
  handleCheck = index => {
    const todos = [].concat(this.state.todoList);
    todos[index].isDone = !todos[index].isDone;
    this.setState({
        todoList: todos,
    });
  };
  onRowOpen(rowKey, rowMap, toValue) {
    const rowRef = rowMap[rowKey];
    rowRef.closeRow();
  };
  delete = (index) => () => {
    const todoList = [].concat(this.state.todoList);
    todoList.splice(index,1);
  
    this.setState({
      todoList,
    });
  };
  render(){
    return (
      <View style={styles.container}>
        <Wrapper>
          <Header/>
        </Wrapper>
          <ToDoListItem/>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    flex:1,
    backgroundColor:'#f9dfd5'
  },
});
