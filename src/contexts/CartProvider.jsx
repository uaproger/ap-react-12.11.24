import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext(undefined);
CartContext.displayName = "CartProvider";

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const existingItem = state.items.find(item => item.id === action.payload.item.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.item.id
                            ? { ...item, quantity: item.quantity + action.payload.qty }
                            : item
                    ),
                    count: state.count + action.payload.qty,
                    totalPrice: state.totalPrice + action.payload.item.unitPrice * action.payload.qty
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload.item, quantity: action.payload.qty }],
                count: state.count + action.payload.qty,
                totalPrice: state.totalPrice + action.payload.item.unitPrice * action.payload.qty
            };
        }
        case "INCREMENT": {
            const targetItem = state.items.find(item => item.id === action.payload.id);
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                count: state.count + 1,
                totalPrice: state.totalPrice + (targetItem ? targetItem.unitPrice : 0)
            };
        }
        case "DECREMENT": {
            const targetItem = state.items.find(item => item.id === action.payload.id);
            const decrementAmount = targetItem ? Math.min(1, targetItem.quantity) : 0;

            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                            : item
                    )
                    .filter(item => item.quantity > 0),
                count: state.count - decrementAmount,
                totalPrice: state.totalPrice - (targetItem ? targetItem.unitPrice : 0)
            };
        }
        case "DELETE_ITEM": {
            const targetItem = state.items.find(item => item.id === action.payload.id);
            const deleteCount = targetItem ? targetItem.quantity : 0;
            const deletePrice = targetItem ? targetItem.unitPrice * deleteCount : 0;

            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                count: state.count - deleteCount,
                totalPrice: state.totalPrice - deletePrice
            };
        }
        case "CLEAR_CART": {
            return {
                items: [],
                count: 0,
                totalPrice: 0
            };
        }
        default:
            return state;
    }
}

const initialState = {
    items: [],
    count: 0,
    totalPrice: 0
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const increasingNumberPizzas = (id) => {
        dispatch({ type: "INCREMENT", payload: { id } });
    }

    const decreasingNumberPizzas = (id) => {
        dispatch({ type: "DECREMENT", payload: { id } });
    }

    const showNumberPizzas = (pizza, qty) => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                item: pizza,
                qty,
            },
        });
    }

    const deleteItem = (id) => {
        dispatch({ type: "DELETE_ITEM", payload: { id } });
    }

    return (
        <CartContext.Provider value={{ state, dispatch, increasingNumberPizzas, decreasingNumberPizzas, showNumberPizzas, deleteItem }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartProvider;
