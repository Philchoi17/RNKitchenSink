import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Initial from '../Screens/Initial';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen component={Initial} name="Initial" />
    </Navigator>
  );
};

export default AuthStack;
