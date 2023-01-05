import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import Carrinho from '../screens/carrinho'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          headerTitle: 'Meu Carrinho'
        }}
      />
    </Stack.Navigator>
  )
}