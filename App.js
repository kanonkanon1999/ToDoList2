import React from 'react';
import { StyleSheet, Alert, View, AsyncStorage , } from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';

const LIST = "@TODO"

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      id: 4,
      mainColor:'#1EAF9E',
      backColor:'#C9EFEB',
    }
  }
  colors=[
    {id: 1, mainColor: '#CA3C6E', backColor: '#F4D2DE'},
    {id: 2, mainColor: '#F0BA33', backColor: '#FCF1D3'},
    {id: 3, mainColor: '#B2CF3F', backColor: '#EEF5D3'},
    {id: 4, mainColor: '#1EAF9E', backColor: '#C9EFEB'},
    {id: 5, mainColor: '#8858AA', backColor: '#E6D7EE'},
  ]

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const todoString = await AsyncStorage.getItem(LIST);
      if(todoString) {
        const list = JSON.parse(todoString);
        this.setState({todoList: list});
      }
    } catch (e) {
      console.log(e)
    }
  }

  async setData(list) {
    try {
      const todoString = JSON.stringify(list);
      await AsyncStorage.getItem(LIST);
      await AsyncStorage.setItem(LIST, todoString);
    } catch (e) {
      console.log(e)
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
    this.setData(this.state.todoList);
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
