import { View, Image } from "react-native";
import { CartContent, CartButton } from "./styled";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View>
      <CartContent>
        <CartButton onPress={() => navigation.openDrawer()}>
          <Image
            source={require("./../../assets/burg.png")}
            style={{ width: 42, height: 34 }}
          />
        </CartButton>
      </CartContent>
    </View>
  );
}
