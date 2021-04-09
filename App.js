import React, {useReducer} from 'react';
import 'react-native-gesture-handler';
import firebase from './firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

import FirebaseReducer from './context/firebase/firebaseReducer';
import FirebaseContext from './context/firebase/firebaseContext';

//importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();

const App = () => {
  const initialState = {
    menu: [
    ]
}
//useReducer con dispatch para ejecutar las funciones
const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  return (
    <FirebaseContext.Provider
    value={{
        menu: state.menu,
        firebase
    }}
    >
   <PedidoState>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFDA00'},
     headerTitleStyle:{
       fontWeight: 'bold'
     }}}
      >
      <Stack.Screen name="NuevaOrden" component={NuevaOrden} options={{title: "Nueva Orden"}}/>
      <Stack.Screen name="Menu" component={Menu} options={{title: "Nuestro Menú"}}/>
      <Stack.Screen name="DetallePlatillo" component={DetallePlatillo} options={{title: "Detalle Platillo"}}/>
      <Stack.Screen name="FormularioPlatillo" component={FormularioPlatillo} options={{title: "Ordenar Platillo"}}/>
      <Stack.Screen name="ResumenPedido" component={ResumenPedido} options={{title: "Resumen Pedido"}}/>
      <Stack.Screen name="ProgresoPedido" component={ProgresoPedido} options={{title: "Progreso de Pedido"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PedidoState>
    </FirebaseContext.Provider>
  );
};

export default App;
