import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Camera from "../screens/camera";
import Mapa from "../screens/mapa";

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator 
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,

        drawerActiveBackgroundColor: '#00dae4',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'

      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Inicio'
        }}
      />

      <Drawer.Screen
        name="Localização"
        component={Mapa}
      />

      <Drawer.Screen
        name="Compartilhe foto curtindo seu lanche"
        component={Camera}
      />
    </Drawer.Navigator>
  )
}