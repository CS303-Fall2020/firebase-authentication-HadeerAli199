import React,{useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import RootNavigation from './navigation/RootNavigation';
import ApiKeys from './constant/ApiKeys';
import * as firebase from 'firebase';
import Todo from './components/Todo';
export default function App () {
  
 const[isAuthenticated,setIsAuthenticated]=useState(false)

      if(!firebase.apps.length){firebase.initializeApp(ApiKeys.firebaseConfig);}
   firebase.auth().onAuthStateChanged(function(user){
     setIsAuthenticated(!!user)
   })
  

 
      return (
        <TouchableWithoutFeedback>
    {(isAuthenticated) ? <Todo/>:<RootNavigation/>} 
    </TouchableWithoutFeedback>

      );
    }
  

  
  
 

