import { useState, useContext } from "react";
import { FlatList, Image, View } from "react-native";
import {
  Container,
  CartContent,
  Title,
  Dot,
  DotText,
  CartButton,
} from "./styled";
import Product from "../../components/product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../components/contexts/CartContext";
import Header from "../../components/header";
import burger1 from "./../../assets/1.jpeg";
import burger2 from "./../../assets/2.jpeg";
import burger3 from "./../../assets/3.jpeg";
import burger4 from "./../../assets/4.jpeg";
import burger5 from "./../../assets/5.jpeg";
import burger6 from "./../../assets/6.jpeg";
import burger7 from "./../../assets/7.jpeg";
import burger8 from "./../../assets/8.jpeg";
import burger9 from "./../../assets/9.jpeg";
import burger10 from "./../../assets/10.jpeg";
export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: "1",
      image: burger1,
      name: "American Classic",
      price: 19.9,
    },
    {
      id: "2",
      image: burger2,
      name: "Extreme burger",
      price: 25.9,
    },
    {
      id: "3",
      image: burger3,
      name: "BBQ burger",
      price: 49.9,
    },
    {
      id: "4",
      image: burger4,
      name: "Chili burger",
      price: 39.9,
    },
    {
      id: "5",
      image: burger5,
      name: "Batata frita",
      price: 23.9,
    },
    {
      id: "6",
      image: burger6,
      name: "Rustic Burguer",
      price: 39.9,
    },
    {
      id: "7",
      image: burger7,
      name: "Texas burger",
      price: 40.9,
    },
    {
      id: "8",
      image: burger8,
      name: "Gourmet burger",
      price: 33.9,
    },
    {
      id: "9",
      image: burger9,
      name: "Ultimate Burger",
      price: 29.9,
    },
    {
      id: "10",
      image: burger10,
      name: "Super Burger",
      price: 39.9,
    },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <Container>
      <CartContent>
        <Header />
        <Title>Buguer Castle</Title>
        <CartButton onPress={() => navigation.navigate("Carrinho")}>
          {cart.length >= 1 && (
            <Dot>
              <DotText>{cart?.length}</DotText>
            </Dot>
          )}
          <Image
            source={require("./../../assets/cart.png")}
            style={{ width: 42, height: 34 }}
          />
        </CartButton>
      </CartContent>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </Container>
  );
}
