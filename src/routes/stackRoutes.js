import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Carrinho from "../screens/carrinho";
import PedidoFinalizado from "../screens/pedidoFinalizado";
import OnboardingIntro from "../screens/onboardingIntro";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>

    <Stack.Screen
        name="OnboardingIntro"
        component={OnboardingIntro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          headerTitle: "Meu Carrinho",
          headerTintColor:"#F07704",
        }}
      />

      <Stack.Screen
        name="Finalizado"
        component={PedidoFinalizado}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
