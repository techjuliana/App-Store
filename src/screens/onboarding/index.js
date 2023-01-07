import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require("./../../assets/intro.png")}
        style={{ width: 34, height: 36, alignItems:"center" }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ width: "100%", height:"96%"  }}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
