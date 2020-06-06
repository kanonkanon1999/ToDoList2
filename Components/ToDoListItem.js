import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeListView } from 'react-native-swipe-list-view';

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
    }
    
    render(){
        return (
        <View style={styles.ToDoListItemContainer}>
            <SwipeListView 
                useFlatList={true}
                data={this.state.todoList}
                renderItem={(rowData, rowMap,item,index) => {
                    return(
                       <View style={styles.ToDoListItem}>
                            <Icon
                                name={
                                    rowData.isDone ?　'checkbox-marked' : 'checkbox-blank-outline'
                                }
                                style={[
                                    styles.CheckBox,
                                    {
                                        color: rowData.isDone ? 'gray' : '#323333',
                                    },
                                ]}
                                isDone={rowData.isDone}
                                size={35}
                                onPress={() => {
                                    this.handleCheck(index);
                                }}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        textDecorationLine: rowData.isDone ? 'line-through' : 'none',
                                        color: rowData.isDone ? 'gray' : '#323333',
                                    },
                                ]}
                                onPress={() => this.handleCheck(index)}>
                                    {rowData.item.name}
                            </Text>
                        </View>
                    );
                }}
                renderHiddenItem={ (rowData, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity onPress={ () => rowMap[rowData.item.key].closeRow() }>
                            <Text style={styles.rowBackText}>削除</Text>
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={60}
                rightOpenValue={-150}
                onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                rowMap[rowKey].closeRow()
                }, 2000)
    }}
            />
        <Footer onPress={this.addTodo}/>
        </View>
        );
    }}
const styles = StyleSheet.create({
    rowBackText:{
        marginRight:10,
        marginTop:20,
        textAlign:'right',
        color:'#fff',
        fontSize:20,
    },
    rowBack:{
        justifyContent: 'space-between',
        backgroundColor:'red',
        height:60,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        width:width,
    },
    text: {
        marginLeft:10,
        marginTop:17,
        fontWeight: '400',
        fontSize:20,
    },
   ToDoListItem: {
       height:60,
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
