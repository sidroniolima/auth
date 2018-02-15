import React from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';

export default class App extends React.Component 
{
  componentWillMount()
  {
    firebase.initializeApp(
    {
      apiKey: 'AIzaSyAn2n9yytdnGnF_wWD0dvdJJVjUdwnwWIE',
      authDomain: 'authentication-udemy-course.firebaseapp.com',
      databaseURL: 'https://authentication-udemy-course.firebaseio.com',
      projectId: 'authentication-udemy-course',
      storageBucket: 'authentication-udemy-course.appspot.com',
      messagingSenderId: '1091327173790'
    });
  }

  render() 
  {
    return (
      <View>
        <Header
          headerText='Authentication'>
        </Header>
        <LoginForm />
      </View>
    );
  }
}