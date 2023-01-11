import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Imagens, Container } from "./styled";
import Burger8 from "./../../assets/8.jpeg";
import Burger9 from "./../../assets/9.jpeg";

const carrosselItens = [
  {
    image: Burger8,
  },
  {
    image: Burger9,
  },
];

function carrosselCardItens({ item }) {
  return (
    <View>
      <Imagens source={{ uri: `${item.image}` }} />
    </View>
  );
}
export default function Carrossel() {
  return (
    <Container>
      <Carousel
        layout={"tinder"}
        layoutCardOffset={10}
        data={carrosselItens}
        renderItem={carrosselCardItens}
        sliderWidth={200}
        itemWidth={200}
      />
    </Container>
  );
}
