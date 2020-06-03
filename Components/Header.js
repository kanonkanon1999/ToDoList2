import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     Dimensions, 
    } from 'react-native';

import {
    Header,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoHeader() {
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        leftComponent={<Icon name= 'paint-brush' size={20} style={styles.leftIcon}/>}
        centerComponent={{ text: 'To Do List', style: { color: '#fff', fontSize:20, },  }}
        rightComponent={<Icon name= 'trash-o' size={20}  style={styles.rightIcon}/>}
        containerStyle={{
        backgroundColor: '#1faf9e',
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    leftIcon:{
        paddingLeft:10,
        color:'#fff',
    },
    rightIcon:{
        paddingRight:10,
        color:'#fff',
    }
});