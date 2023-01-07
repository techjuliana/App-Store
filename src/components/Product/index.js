import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
     
      <View>
      <Image source={data.image} style={styles.imagem}/>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Image
          source={require("./../../assets/bags.jpg")}
          style={{ width: 34, height: 36 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  imagem: {
    borderRadius: 2,
    width: 10,
    height: 10,
  },
});
