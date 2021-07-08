import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,TouchableWithoutFeedback,Keyboard,TextInput} from 'react-native';
import * as firebase from 'firebase';

export default function Forgetpassword() {
 const   onSignoutPress = () => {
        firebase.auth().signOut();
      
      }
    var user=  firebase.auth().currentUser;
    return(
      <View style={{flex:1,justifyContent:'space-around',backgroundColor:'white' }}>   
            <View style={{ height: 20, paddingTop: 20,backgroundColor: 'red', marginBottom:10}}>
             <Text>Todo</Text>
            </View>
           <View style={{flex:1,justifyContent:'space-around',backgroundColor:'white' }}  >
            <Text style={{marginLeft:20}}>welcome {user.email}</Text>
   <        Button onPress={() => onSignoutPress()} title='signout' color='red' />
 
        
            </View>
     </View>
 
    )
}
