import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
    } from 'react-native';

import {
    Header,Overlay,Button,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class TodoHeader extends React.Component {

  
  state ={ 
      isVisible:false,
  }
  handleHideAlert = () =>{
    this.setState({isVisible:false});
  }
  handleDisplayAlert = () =>{
    this.setState({isVisible:true});
  }
  onRowOpen(rowKey, rowMap,) {
    const rowRef = rowMap[rowKey];
    rowRef.closeRow();
};
  render(){
    return (
      <View style={styles.haderContainer}>
        <Header
          style={styles.header}
          leftComponent={<Icon name= 'paint-brush' size={20} style={styles.leftIcon}/>}
          centerComponent={{ text: 'To Do List', style: { color: '#fff', fontSize:20, },  }}
          rightComponent={<Icon onPress={this.handleDisplayAlert} name= 'trash-o' size={20}  style={styles.rightIcon}/>}
          containerStyle={{
          backgroundColor: '#e06a3b',
          }}
          />
          <Overlay
              isVisible={this.state.isVisible}
          >
            <View >
                <Text style={styles.alert}>全て削除しますか？</Text>
                <View style={styles.button}>
                    <Button 
                      onPress={this.handleHideAlert}
                      titleStyle={styles.cancel}
                      type="clear"
                      title='キャンセル'
                    />
                    <Button
                      titleStyle={styles.delete}
                      type="clear"
                      title='削除'
                    />
                </View>
            </View>
          </Overlay>
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