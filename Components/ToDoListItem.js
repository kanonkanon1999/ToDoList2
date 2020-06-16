import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import TodoRow from './TodoRow';
import Footer from './Footer';
import { Header } from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('window');

export default class ToDoListItem extends React.Component  {
    onRowOpen(rowKey, rowMap,) {
        const rowRef = rowMap[rowKey];
        rowRef.closeRow();
    };
    render(){
        return (
        <View style={styles.position}>
            <SwipeListView 
                useFlatList={true}
                data={this.props.todoList}
                renderItem={({item,index}) => 
                <TodoRow {...item} 
                onHandleCheck={this.props.onHandleCheck(index)}
                todoList={this.props.todoList}
                />}
                renderHiddenItem={({index}) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity onPress={this.props.onDelete(index)}>
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
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={55}>
                <Footer onAdd={this.props.onAdd}/>
            </KeyboardAvoidingView>
        </View>
        );
    }}
const styles = StyleSheet.create({
    position:{
        height:610,
        justifyContent:'space-between',
    },
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