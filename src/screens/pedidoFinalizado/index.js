import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Imagem, Botao } from "./styled";
export default function PedidoFinalizado() {
  const navigation = useNavigation();
  return (
    <Container>
      <Imagem source={require("./../../assets/feito.png")} />
      <Botao onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Comprar Novamente
        </Text>
      </Botao>
    </Container>
  );
}
