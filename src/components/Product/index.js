import { View, Image } from "react-native";
import { Container, Title, ButtonAdd, Imagem } from "./styled";
import {
  Container,
  Title,
  Price,
  ButtonAdd,
  Imagem,
} from "./styled";
export default function Product({ data, addToCart }) {
  return (
    <Container>
      <View>
        <Imagem source={data.image} />
        <Title>{data.name}</Title>
        <Price>R$ {data.price}</Price>
      </View>

      <ButtonAdd onPress={addToCart}>
        <Image
          source={require("./../../assets/bags.jpg")}
          style={{ width: 34, height: 36 }}
        />
      </ButtonAdd>
    </Container>
  );
}
