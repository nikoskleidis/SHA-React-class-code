import React, { useEffect, useReducer } from "react";
import { getFromStorage, saveToStorage } from "../utils";

const BasketContext = React.createContext({});

const STORAGE_KEY = "basketItems";

const basketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const newItem = action.item;
      const itemFound = state.some((item) => item.id === newItem.id);

      if (itemFound) {
        return state.map((item) => {
          if (newItem.id === item.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...state, { ...newItem, quantity: 1 }];
      }
    }
    case "EDIT_BASKET_ITEM": {
      const { itemId, quantity } = action;
      if (isNaN(quantity)) return;
      return state.reduce((acc, item) => {
        if (itemId === item.id) {
          if (Number(quantity) > 0) {
            return [...acc, { ...item, quantity: quantity }];
          } else {
            return acc;
          }
        } else {
          return [...acc, item];
        }
      }, []);
    }
    case "REMOVE_BASKET_ITEM": {
      const { itemId } = action;
      return state.filter((item) => item.id !== itemId);
    }
    default: {
      return state;
    }
  }
};

function BasketProvider(props) {
  const [basketItems, dispatch] = useReducer(
    basketReducer,
    getFromStorage(STORAGE_KEY) || []
  );

  useEffect(() => {
    saveToStorage(STORAGE_KEY, basketItems);
  }, [basketItems]);

  return (
    <BasketContext.Provider value={{ basketItems, dispatch }}>
      {props.children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;

export { BasketContext };
