import CART_ACTION_TYPES from "./cart.types";

export const CART_INITIAL_STATE = {
  cart: [],
  loading: false,
  error: null,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: handleAddToCart(payload, state.cart),
        loading: false,
      };
    case CART_ACTION_TYPES.ADD_TO_CART_FAILED:
      return { ...state, error: payload, loading: false };
    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: handleRemoveFromCart(payload, state.cart),
        loading: false,
      };
    default:
      return { ...state };
  }
};

const handleAddToCart = (productToAdd, cartItems) => {
  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
  );

  if (existingcartItem) {
    return cartItems.map((cartItem) => 
      (cartItem.id == productToAdd.id)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const handleRemoveFromCart = (cartItemToRemove, cartItems) => {
  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToRemove.id
  );

  if (existingcartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) => 
    (cartItem.id == cartItemToRemove.id)
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
};

