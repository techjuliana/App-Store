import { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import Product from "../../components/product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../components/contexts/CartContext";

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: "1",
      image: <Image source={require("./../../assets/1.jpeg")} />,
      name: "American Classic",
      price: 19.9,
    },
    {
      id: "2",
      imagem: <Image source={require("./../../assets/2.jpeg")} />,
      name: "Extreme burger",
      price: 25.9,
    },
    {
      id: "3",
      imagem: <Image source={require("./../../assets/3.jpeg")} />,
      name: "BBQ burger",
      price: 49.9,
    },
    {
      id: "4",
      imagem: <Image source={require("./../../assets/4.jpeg")} />,
      name: "Chili burger",
      price: 39.9,
    },
    {
      id: "5",
      imagem: <Image source={require("./../../assets/5.jpeg")} />,
      name: "Batata frita",
      price: 23.9,
    },
    {
      id: "6",
      imagem: <Image source={require("./../../assets/6.jpeg")} />,
      name: "Rustic Burguer",
      price: 39.9,
    },
    {
      id: "7",
      imagem: <Image source={require("./../../assets/7.jpeg")} />,
      name: "Texas burger",
      price: 40.9,
    },
    {
      id: "8",
      imagem: <Image source={require("./../../assets/8.jpeg")} />,
      name: "Gourmet burger",
      price: 33.9,
    },
    {
      id: "9",
      imagem: <Image source={require("./../../assets/9.jpeg")} />,
      name: "Ultimate Burger",
      price: 29.9,
    },
    {
      id: "10",
      imagem: <Image source={require("./../../assets/10.jpeg")} />,
      name: "Super Burger",
      price: 39.9,
    },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={stlyes.container}>
      <View style={stlyes.cartContent}>
        <Text style={stlyes.title}>Buguer Castle</Text>

        <TouchableOpacity
          style={stlyes.cartButton}
          onPress={() => navigation.navigate("Carrinho")}
        >
          {cart.length >= 1 && (
            <View style={stlyes.dot}>
              <Text style={stlyes.dotText}>{cart?.length}</Text>
            </View>
          )}
          <Image
            source={require("./../../assets/cart.png")}
            style={{ width: 42, height: 34 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={stlyes.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
});
