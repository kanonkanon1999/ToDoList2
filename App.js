import React from 'react';
import { StyleSheet, Alert, View, AsyncStorage , } from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';


export default class App extends React.Component {
  state = {
    todoList: [],
    id: 4,
    mainColor:'#1EAF9E',
    backColor: '#C9EFEB',
  };
  colors=[
    {id: 1, mainColor: '#CA3C6E', backColor: '#F4D2DE'},
    {id: 2, mainColor: '#F0BA33', backColor: '#FCF1D3'},
    {id: 3, mainColor: '#B2CF3F', backColor: '#EEF5D3'},
    {id: 4, mainColor: '#1EAF9E', backColor: '#C9EFEB'},
    {id: 5, mainColor: '#8858AA', backColor: '#E6D7EE'},
  ]
  async setData() {
    let todoList = this.state.todoList;
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
      console.log('success to set key and value.');
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  getData = async () => {
    let todoList = await AsyncStorage.getItem('todoList');
    let parsed = JSON.parse(todoList);
    try {
      if(parsed !== null){
        console.log(parsed);
      }else{
        console.log('value is not registered.');
      }
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  handleChangeColor = (color) => () => {
    this.setState({
      id: color.id,
      mainColor: color.mainColor,
      backColor: color.backColor,
    });
  }
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
      console.log(list);
      console.log(this.state.todoList);
      this.setData();
      this.getData();
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
      <View style={{ backgroundColor:this.state.backColor,justifyContent:'space-between',flex:1,}}>
        <Wrapper>
          <Header 
          id={this.state.id}
          mainColor={this.state.mainColor}
          onChangeColor={this.handleChangeColor}
          colors={this.colors}
          onAlert={this.handleAlert}
          todoList={this.state.todoList} 
          />
        </Wrapper>
          <ToDoListItem 
          backColor={this.state.backColor}
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
  
});
