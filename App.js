import React from "react";
import Routes from "./src/routes";
import CartProvider from "./src/components/contexts/CartContext";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { tema } from "./src/theme/theme";
export default function App() {
  return (
    <ThemeProvider theme={tema}>
      <NavigationContainer>
        <CartProvider>
          <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
          <Routes />
        </CartProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
