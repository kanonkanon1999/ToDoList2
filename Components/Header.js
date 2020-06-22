import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     Alert,
    } from 'react-native';

import {
    Header,
    Overlay,
    Button,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class TodoHeader extends React.Component {
  
  state ={
    isVisible:false,
  }
  renderIcons() {
    return this.props.colors.map((color) => {
        return (
            <Icon 
                style={{ color: color.mainColor, padding:5, }}
                name='circle'
                size={45}
                key={color.id}
                id={color.id}
                onPress={this.props.onChangeColor(color)}
            />
        );
    });
  }
  onRowOpen(rowKey, rowMap,) {
    const rowRef = rowMap[rowKey];
    rowRef.closeRow();
  }
  handleOverlay = () => () => {
    this.setState(
      {isVisible:true}
    );
  }
  handlehideOverlay = () => () => {
    this.setState(
      {isVisible:false}
    );
  }
  render(){
    return (
      <View style={styles.haderContainer}>
        <Header
          todoList={this.props.todoList}
          style={styles.header}
          leftComponent={<Icon onPress={this.handleOverlay()}　name= 'paint-brush' size={20} style={styles.leftIcon}/>}
          centerComponent={{ text: 'To Do List', style: { color: '#fff', fontSize:20, },  }}
          rightComponent={<Icon　onPress={this.props.onAlert()} name= 'trash-o' size={20}  style={styles.rightIcon}/>}
          containerStyle={{
          backgroundColor: this.props.mainColor,
          }}
          />
          <Overlay isVisible={this.state.isVisible} onBackdropPress={this.handlehideOverlay()} overlayStyle={styles.overlay}>
            <View>
              <Text　style={styles.colorChangeText}>テーマカラーを選択</Text>
              <View style={{flexDirection:'row'}}>
              {this.renderIcons()}
              </View>
              <Button title='決定'　buttonStyle={styles.buttonStyle} onPress={this.handlehideOverlay()}/>
            </View>
          </Overlay>
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
    buttonStyle: {
      marginTop:20,
      marginLeft:'auto',
      marginRight:'auto',
      width:100,
      backgroundColor: '#f38181',
    },
    overlay: {
      padding:30,
    },
    colorChangeText: {
      marginLeft:'auto',
      marginRight:'auto',
      paddingBottom:20,
      color:'#323333',
      fontSize:20,
      fontWeight:'400'
    },
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