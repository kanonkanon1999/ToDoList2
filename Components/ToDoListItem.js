import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from './Footer';

const {width} = Dimensions.get('window');

export default class ToDoListItem extends React.Component  {

    state = {
        todoList: [],
    };

    addTodo = text => {
        const list =[].concat(...this.state.todoList);
        list.push({
            key: Date.now(),
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
    }
    render(){
        return (
        <View style={styles.ToDoListItemContainer}>
        <FlatList
            keyExtractor={(item, index) => {item.key,index.toString()}}
            data={this.state.todoList}
            renderItem={({item,index}) => {
                return(
                   <View style={styles.ToDoListItem}>
                        <Icon
                            name={
                                item.isDone ?　'checkbox-marked' : 'checkbox-blank-outline'
                            }
                            style={[
                                styles.CheckBox,
                                {
                                    color: item.isDone ? 'gray' : '#323333',
                                },
                            ]}
                            isDone={item.isDone}
                            size={35}
                            onPress={() => {
                                this.handleCheck(index);
                            }}
                        />
                        <Text
                            style={[
                                styles.text,
                                {
                                    textDecorationLine: item.isDone ? 'line-through' : 'none',
                                    color: item.isDone ? 'gray' : '#323333',
                                },
                            ]}
                            onPress={() => this.handleCheck(index)}>
                                {item.name}
                        </Text>
                    </View>
                );
            }}
        />
        <Footer onPress={this.addTodo}/>
        </View>
        );
    }}
const styles = StyleSheet.create({
    text: {
        marginLeft:10,
        marginTop:17,
        fontWeight: '400',
        fontSize:20,
    },
   ToDoListItem: {
       flexDirection: 'row',
       borderBottomColor:'#fff',
       borderBottomWidth:2,
       width:width,
       backgroundColor: '#c9efeb',
   },
   CheckBox: {
       marginLeft:20,
       marginRight:10,
       marginTop:10,
       marginBottom:10,
       color:'#323333',
   },
  
});
