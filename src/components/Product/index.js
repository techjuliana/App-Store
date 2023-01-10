import { View, Image } from "react-native";
import { Container, Title, Price, ButtonAdd, Imagem,ContainerList } from "./styled";
export default function Product({ data, addToCart }) {
  return (
    <Container>
      <ContainerList>
        <Imagem source={data.image} />
        <Title>{data.name}</Title>
        <Price>R$ {data.price}</Price>
      </ContainerList>

      <ButtonAdd onPress={addToCart}>
        <Image
          source={require("./../../assets/bags.jpg")}
          style={{ width: 34, height: 36 }}
        />
      </ButtonAdd>
    </Container>
  );
}
