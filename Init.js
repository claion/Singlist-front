import CheckLogin from './screens/CheckLoginScreen';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './navigators/MainNavigator';
import Login from './screens/LoginScreen';
import {MAIN_COLOR} from './constants/colors'
import Sign from './screens/Sign';
import Forgot from './screens/Forgot';


const AppStackNavigator = createStackNavigator({
    Main:{
      screen: MainScreen,
      navigationOptions: {
        title: 'UniCLASS',
      headerStyle: {
          backgroundColor: MAIN_COLOR
      },
      headerTintColor: '#fff',
      }
    }
  });

const switchNavigator = createSwitchNavigator({
    Login,
    CheckLogin,
    MainScreen: AppStackNavigator,
    Sign,
    Forgot,
}, {
    initialRouteName: 'CheckLogin'
})

export default createAppContainer(switchNavigator);