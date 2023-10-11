import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro } from '../../screens/Cadastro';
import { Listagem } from '../../screens/Listagem';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Menu">
      <Screen 
        name='Cadastro' 
        component={Cadastro}
        options={{
          headerShown: true,
        }}
      />
      <Screen
        name='Listagem'
        component={Listagem}
        options={{
          headerShown:true,
        }}
      />
    </Navigator>
  )
}