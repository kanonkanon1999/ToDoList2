import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

export default function Footer() {
    
    state = {
        todoValue: '',
    };

    onchange = text => {
        this.setState({todoValue: text});
    };
    onPress = () => {
        this.props.onPress(this.state.todoValue);
        this.textInput.clear();
    };

  return (
    <View style={styles.footercontainer}>
        <TextInput
            onChangeText={this.onChange}
            autoCapitalize='none'
            placeholder={'新規入力'}
            style={styles.TextInput}
            ref={input =>{
                this.textInput = input;
            }}
        />
        <Icon
            onPress={this.onPress}
            name={'pencil-square-o'}
            style={styles.footerIcon}
            size={35}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    TextInput:{
        height:60,
        width:width,
        alignItems:'center',
        position: 'absolute',
        fontSize:20,
        paddingLeft:25,
    },
    footerContainer:{
        height:60,
        backgroundColor:'#fff',
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