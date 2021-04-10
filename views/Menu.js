import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Separator, List, Content, ListItem, Thumbnail, Text, Body} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';
const Menu = () => {
    //Context de Firebase
    const {menu, obtenerProductos} = useContext(FirebaseContext);

    //Context de Pedidos
    const {seleccionarPlatillo} = useContext(PedidoContext);

    useEffect(()=>{
        obtenerProductos();
    }, []);

const mostrarHeading= (categoria, i) =>{
  
  const categoriaAnterior= menu[i-1].categoria;
    if(i>0){
            if(categoriaAnterior !== categoria){

    return (
        <Separator style={style.separador}>
        <Text style={style.separadorTexto}>
        {categoria}
        </Text>
        </Separator>
    )
    }else{
        <Separator style={style.separador}>
        <Text style={style.separadorTexto}>
        {categoria}
        </Text>
        </Separator>
    }
    }
}

    return ( <Container style={globalStyles.contenedor}>
        <Content style={{backgroundColor: '#FFF'}}>
            <List>
            {menu.map( (platillo, i)=> {
                const {imagen, nombre, descripcion, categoria, precio, id} = platillo;

                return (
                    <Fragment key={id}>
                    {mostrarHeading(categoria, i)}
                        <ListItem onPress={()=>{
                            seleccionarPlatillo(platillo)
                        }}>
                        <Thumbnail large square source={{uri: imagen}}/>
                            <Body>
                                <Text>{nombre}</Text>
                                <Text note numberOfLines={2}>{descripcion}</Text>
                                <Text>Precio: $ {precio}</Text>
                            </Body>
                        </ListItem>
                    </Fragment>
                );
            })}
            </List>

        </Content>

    </Container> );
}

const styles = StyleSheet.create({
    separador:{
       backgroundColor: '#000',
    },
    separadorTexto:{
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})


 
export default Menu;