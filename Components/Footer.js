import React from 'react';
import { StyleSheet, View, TextInput, Dimensions, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

export default class Footer extends React.Component {
    
    state = {
        todoValue: '',
    };

    onChange = text => {
        this.setState({todoValue: text});
    };
    onRowOpen(rowKey, rowMap,) {
        const rowRef = rowMap[rowKey];
        rowRef.closeRow();
    };
    addTodo　= () =>{
        this.props.onAdd(this.state.todoValue);
        this.textInput.clear()
        this.setState({
            todoValue:''
          });
    };
 render(){
     console.log(this.state.todoValue);
  return (
    <View style={styles.footercontainer}>
        <TextInput
            maxLength={20}
            returnKeyType='done'
            onSubmitEditing={this.addTodo}
            onChangeText={this.onChange}
            autoCapitalize='none'
            placeholder={'新規入力'}
            style={styles.TextInput}
            ref={input =>{
                this.textInput = input;
            }}
        />
        <Icon
            onPress={this.addTodo}
            name={'pencil-square-o'}
            style={styles.footerIcon}
            size={35}
        />
    </View>
  );
}}

const styles = StyleSheet.create({
    TextInput:{
        height:60,
        width:width,
        alignItems:'center',
        position: 'absolute',
        fontSize:20,
        paddingLeft:25,
    },
    footercontainer:{
        height:60,
        backgroundColor:'#fff',
        marginBottom:5,
    },
    footerIcon: {
       color:'#323333',
       marginLeft:320,
       marginRight:10,
       marginTop:15,
       marginBottom:10,
       textAlign:'right',
       
    },
});