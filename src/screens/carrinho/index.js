import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CartContext } from "../../components/contexts/CartContext";
import CardItem from "../../components/CardItem";

export default function Carrinho() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View style={stlyes.container}>
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
        ListFooterComponent={() => (
          <Text style={stlyes.total}>Total: R$ {total}</Text>
        )}
      />
    </View>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
