import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import TodoRow from './TodoRow';
import Footer from './Footer';

const {width} = Dimensions.get('window');
const {
    index,
} = props;

export default class ToDoListItem extends React.Component  {
    render(){
        return (
        <View style={styles.position}>
            <SwipeListView 
                useFlatList={true}
                data={this.props.todoList}
                renderItem={({item,index}) => <TodoRow {...item} onPress={() => {this.props.handleCheck(index)}}/>}
                renderHiddenItem={({index}) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity onPress={this.props.delete(index)}>
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
                <Footer onPress={this.props.addTodo}/>
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