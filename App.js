import React from 'react';
import { StyleSheet, Alert, View, } from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    todoList: [],
  };
  handleCheck = (index) => () => {
    const todos = [].concat(this.state.todoList);
    todos[index].isDone = !todos[index].isDone;
    this.setState({
        todoList: todos,
    });
  };
  delete = (index) => () => {
    const todoList = [].concat(this.state.todoList);
    todoList.splice(index,1);

    this.setState({
      todoList,
    });
  };
  addTodo = (text) => {
    if (!text) return;
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
  handleAlert = () => () => {
    Alert.alert('全て削除しますか？','',[
      {
        text: '削除',
        onPress: () => {this.handleDeleteAll()},
        style: 'default',
      },
      {
        text: 'キャンセル',
        style: 'cancel',
      },
    ]);
  }
  handleDeleteAll = () => {
    const todoList = [].concat(this.state.todoList);
    todoList.splice(0);

    this.setState({
      todoList,
    });
  };
  
  render(){
    return (
      <View style={styles.container}>
        <Wrapper>
          <Header 
          onAlert={this.handleAlert}
          todoList={this.state.todoList} 
          />
        </Wrapper>
          <ToDoListItem 
          todoList={this.state.todoList} 
          onDelete={this.delete} 
          onHandleCheck={this.handleCheck} 
          onAdd={this.addTodo}
          />
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    flex:1,
    backgroundColor:'#f0d0e5'
  },
});
