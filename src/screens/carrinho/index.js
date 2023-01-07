import { useContext } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { Container, Total } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../components/contexts/CartContext";
import CardItem from "../../components/CardItem";

export default function Carrinho() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <Container>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => <Total>Total: R$ {total}</Total>}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Finalizado")}>
        <Text>Finalizar pedido</Text>
      </TouchableOpacity>
    </Container>
  );
}
