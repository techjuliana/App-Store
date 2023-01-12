import React from "react";
import { View} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Imagens, Container } from "./styled";

const carrosselItens = [
  {
    image: require("./../../assets/imgCarrossel/1.png"),
  },
  {
    image: require("./../../assets/imgCarrossel/2.png"),
  },
  {
    image: require("./../../assets/imgCarrossel/3.png"),
  },
  {
    image: require("./../../assets/imgCarrossel/4.png"),
  },
  {
    image: require("./../../assets/imgCarrossel/5.png"),
  },
];

function carrosselCardItens({ item }) {
  return (
    <View>
      <Imagens source={item.image} />
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
        sliderWidth={340}
        itemWidth={300}
      />
    </Container>
  );
}
