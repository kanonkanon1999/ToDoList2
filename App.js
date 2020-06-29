import React from 'react';
import { StyleSheet, Alert, View, AsyncStorage , } from 'react-native';
import ToDoListItem from './Components/ToDoListItem';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';

const LIST = "@TODO"
const MAIN = "@MAIN"
const BACK = "@BACK"

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
    this.loadMain();
    this.loadBack();
  }
  componentDidUpdate(prevProps) {
    if (this.state.todoList !== prevProps.todoList) {
      this.setData(this.state.todoList);
    }
    if (this.state.mainColor !== prevProps.mainColor) {
      this.saveMain(this.state.mainColor);
    }
    if (this.state.backColor !== prevProps.backColor) {
      this.saveBack(this.state.backColor);
    }
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
  loadMain = async () => {
    try{
      const mainString = await AsyncStorage.getItem(MAIN);
      if(mainString){
        const main = JSON.parse(mainString)
        this.setState({mainColor: main})
      }
      }catch(e){
        console.log(e);
    }
  }
  loadBack = async () => {
    try{
      const backString = await AsyncStorage.getItem(BACK);
      if(backString){
        const back = JSON.parse(backString)
        this.setState({backColor: back})
      }
      }catch(e){
        console.log(e);
    }
  }
  async setData(list) {
    try {
      const todoString = JSON.stringify(list);
      await AsyncStorage.setItem(LIST, todoString);
    } catch (e) {
      console.log(e)
    }
  }
  async saveMain(main) {
    try{
      const mainString = JSON.stringify(main);
      await AsyncStorage.setItem(MAIN,mainString);
    } catch(e){
        console.log(e);
    }
  }
  async saveBack(back) {
    try{
      const backString = JSON.stringify(back);
      await AsyncStorage.setItem(BACK,backString);
    } catch(e){
        console.log(e);
    }
  }
  handleChangeColor = (color) => () => {
    this.setState({
      id: color.id,
      mainColor: color.mainColor,
      backColor: color.backColor,
    });
    this.saveMain(this.state.mainColor);
    this.saveBack(this.state.backColor);
  }
  handleCheck = (index) => () => {
    const todos = [].concat(this.state.todoList);
    todos[index].isDone = !todos[index].isDone;
    this.setState({
        todoList: todos,
    });
    this.setData(this.state.todoList);
  };
  delete = (index) => () => {
    const todoList = [].concat(this.state.todoList);
    todoList.splice(index,1);
    this.setState({
      todoList,
    });
    this.setData(this.state.todoList);
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
      this.setData(this.state.todoList);
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
    this.setData(this.state.todoList);
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
