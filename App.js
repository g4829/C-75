import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import FacebookScreen from './screens/FacebookScreen';
import InstagramScreen from './screens/InstagramScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen},
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
  Login: {screen: LoginScreen},

    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === "WriteStory"){
          return(
            <Image
            source={require("./assets/write.png")}
            style={{width:40, height:40}}
          />
          )
          
        }
        else if(routeName === "ReadStory"){
          return(
            <Image
            source={require("./assets/read.png")}
            style={{width:40, height:40}}
          />)
          
        }
      }
    })
});

const SwitchNavigator=createSwitchNavigator({
  LoginScreen : LoginScreen,
  TabNavigator : TabNavigator
})
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});