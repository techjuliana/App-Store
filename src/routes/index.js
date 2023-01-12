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

        drawerActiveBackgroundColor: '#F07704',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'

      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Cardapio'
        }}
      />

      <Drawer.Screen
        name="Compartilhe curtindo seu lanche"
        component={Camera}
      />
    </Drawer.Navigator>
  )
}