import React from 'react';
import { StyleSheet,  View,} from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';


export default class App extends React.Component {

  state = {
    todoList: [],
  };
  handleCheck = index => {
    console.log('Hello!');
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
        todoValue:''
      });
  };
  render(){
    return (
      <View style={styles.container}>
        <Wrapper>
          <Header/>
        </Wrapper>
          <ToDoListItem 
          todoList={this.state.todoList} 
          onDelete={this.delete} 
          onHandleCheck={() => this.handleCheck } 
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
    backgroundColor:'#f9dfd5'
  },
});
