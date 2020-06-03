import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from './Footer';

const {width} = Dimensions.get('window');

export default function ToDoListItem() {
    state = {
        todoList: [],
    };
    addTodo = text => {
        const list =[].concat(...this.state.todoList);
        list.push({
            key: Data.now(),
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
  return (
    <View style={styles.ToDoListItemContainer}>
        <FlatList
            data={this.state.todoList}
            renderItem={({item,index}) => {
                return(
                   <View>
                        <Icon
                          name={
                            item.isDone ? 'checkbox-marked' : 'checkbox-blank-outline'   
                          }
                          isDone={item.isDone}
                          style={styles.Checkbox}
                          size={35}
                          onPress={() => {
                              this.handleCheck(index);
                          }}
                        />
                        <Text>
                            
                        </Text>
                    </View>
                );
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
