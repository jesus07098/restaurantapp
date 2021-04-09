import React, {useReducer} from 'react';
import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';


const PedidoState = props =>{

    const initialState = {
        pedido: [
        ]
    }
    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    return (
        <PedidoContext.Provider
        value={{
            pedido: state.pedido
           // firebase
        }}
        >
        {props.children}
        </PedidoContext.Provider>
    
    );
    }

export default PedidoState;