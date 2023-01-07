import React from "react";
import { View, TouchableOpacity, Text,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function PedidoFinalizado() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require("./../../assets/feito.png")}
        style={{ width: "100%", height:"96%"  }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Finalizado")}
        style={{ width: "100%", backgroundColor:"yellow" }}
      >
        <Text>Continuar navegando</Text>
      </TouchableOpacity>
    </View>
  );
}
