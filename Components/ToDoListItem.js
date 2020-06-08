import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import TodoRow from './TodoRow';
import Footer from './Footer';

const {width} = Dimensions.get('window');

export default class ToDoListItem extends React.Component  {

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
        <View style={styles.position}>
            <SwipeListView 
                useFlatList={true}
                data={this.state.todoList}
                renderItem={({item,index}) => <TodoRow {...item} onPress={() => {this.handleCheck(index)}}/>}
                renderHiddenItem={({index}) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity onPress={this.delete(index)}>
                            <Text style={styles.rowBackText}>削除</Text>
                        </TouchableOpacity>
                    </View>
                )}
                leftActivationValue={200} 
                leftOpenValue={0}
                rightOpenValue={-100}
                onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                rowMap[rowKey]&&rowMap[rowKey].closeRow()
                }, 5000)
    }}
            />
            <Footer onPress={this.addTodo}/>
        </View>
        );
    }}
const styles = StyleSheet.create({
    rowBackText:{
        marginRight:20,
        marginTop:20,
        textAlign:'right',
        color:'#fff',
        fontSize:20,
    },
    rowBack:{
        justifyContent: 'space-between',
        backgroundColor:'#ff6347',
        height:60,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        width:width,
    },
});
