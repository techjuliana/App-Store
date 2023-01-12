import { useState } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Title,
  Price,
  AmountContainer,
  ButtonAdd,
  ButtonRemove,
  Amount,
  Imagem,
} from "./styled";
export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  function handleIncrease() {
    addAmount();
    setAmount((item) => item + 1);
  }

  function handleDecrease() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount((item) => item - 1);
  }

  return (
    <Container>
      <View>
        <Imagem source={data.image} />
        <Title>{data.name}</Title>
        <Price>R$ {data.price}</Price>
      </View>

      <AmountContainer>
        <ButtonAdd onPress={handleIncrease}>
          <Text>+</Text>
        </ButtonAdd>

        <Amount>{amount}</Amount>

        <ButtonRemove onPress={handleDecrease}>
          <Text>-</Text>
        </ButtonRemove>
      </AmountContainer>
    </Container>
  );
}
