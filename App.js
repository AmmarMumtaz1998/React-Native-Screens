// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './src/modules/login/Login';
import SignUp from './src/modules/signup/SignUp';
import LoginForm from './src/modules/login/LoginForm';
import SignUpForm1 from './src/modules/signup/SignUpForm1';
import SignUpForm2 from './src/modules/signup/SignUpForm2';
import Dashboard from './src/modules/dashboard/Dashboard';
import Test from './src/modules/test';
export default function App() {
  return (
    //  <Login/>
    // <SignUp/>
    // <LoginForm/>
    // <SignUpForm1/>
    // <SignUpForm2/>
    <Dashboard />
  );
}
