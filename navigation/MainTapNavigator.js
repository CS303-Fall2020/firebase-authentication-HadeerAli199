import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Todo from'../components/Todo';


const screens ={
    Todo: { 
        screen:Todo ,
        navigationOptions:{
            title:'Todo',
            headerLeft: null,
        }
    },
  
    
}
const MainTapNavigator = createStackNavigator(screens);

export default createAppContainer(MainTapNavigator);