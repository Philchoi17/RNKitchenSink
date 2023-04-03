import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Initial from '../Screens/Initial';
import Login from '../Screens/Login';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen component={Initial} name="Initial" />
      <Screen component={Login} name="Login" />
    </Navigator>
  );
};

export default AuthStack;
