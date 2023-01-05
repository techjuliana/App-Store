import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'

import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../components/contexts/CartContext'

export default function Home(){
  const { cart, addItemCart } = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ])

  function handleAddCart(item){
    addItemCart(item)
  }

  return(
    <SafeAreaView style={stlyes.container}>
      <View style={stlyes.cartContent}>
        <Text style={stlyes.title}>Lista de produtos</Text>

        <TouchableOpacity 
        style={stlyes.cartButton} 
        onPress={ () => navigation.navigate("Carrinho")}
        >
          {cart.length >= 1 && (
            <View style={stlyes.dot}>
              <Text style={stlyes.dotText}>
                {cart?.length}
              </Text>
            </View>
          )}
          <Text>Compras</Text>
          {/* <Feather name="shopping-cart" size={30} color="#000" /> */}
        </TouchableOpacity>
      </View>

      <FlatList
        style={stlyes.list}
        data={products}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Product data={item} addToCart={ () => handleAddCart(item) } /> }
      />


    </SafeAreaView>
  )
}

const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText:{
    fontSize: 12,
  }
})