import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default Icon;
const {width} = Dimensions.get('window');



function TodoRow(props) {
    const {
        isDone,
        name,
        onPress,
    } = props;
  return (
    <View style={styles.ToDoListItem}>
      <Icon
          name={isDone ? 'check-box' : 'check-box-outline-blank'}
          style={[styles.CheckBox,{color: isDone ? 'gray' : '#323333'}]}
          isDone={isDone}
          size={35}
          onPress={onPress}
      />
      <Text
          style={[styles.text,
              {
                  textDecorationLine: isDone ? 'line-through' : 'none',
                  color: isDone ? 'gray' : '#323333',
              },
        ]}
        onPress={onPress}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

