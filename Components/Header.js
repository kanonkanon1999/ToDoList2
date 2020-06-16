import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     Alert,
    } from 'react-native';

import {
    Header,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class TodoHeader extends React.Component {
  
  state ={
    isVisible:false,
  }
  onRowOpen(rowKey, rowMap,) {
    const rowRef = rowMap[rowKey];
    rowRef.closeRow();
};
  render(){
    return (
      <View style={styles.haderContainer}>
        <Header
          todoList={this.props.todoList}
          style={styles.header}
          leftComponent={<Icon name= 'paint-brush' size={20} style={styles.leftIcon}/>}
          centerComponent={{ text: 'To Do List', style: { color: '#fff', fontSize:20, },  }}
          rightComponent={<Icon　onPress={this.props.onAlert()} name= 'trash-o' size={20}  style={styles.rightIcon}/>}
          containerStyle={{
          backgroundColor: '#b43d88',
          }}
          />
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
    cancel:{
      fontWeight:'500'
    },
    delete:{
      fontWeight:'400'
    },
    button:{
      paddingLeft:10,
      paddingRight:20,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    alert:{
      padding:20,
      fontSize:20,
    },
    leftIcon:{
        paddingLeft:10,
        color:'#fff',
    },
    rightIcon:{
        paddingRight:10,
        color:'#fff',
    }
});