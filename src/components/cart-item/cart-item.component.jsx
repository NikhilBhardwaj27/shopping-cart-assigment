import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAsync, removeFromCart } from "../../store/cart/cart.action";
import Button from "../ui/button/button.component";
import Card from "../ui/card/card.component";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addToCartAsync(cartItem));
  };

  const handleDecrement = () => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <>
      <div className="cart-item-container">
        <Card cardType="normal" style={{ backgroundColor: "white" }}>
          <div className="cart-image-item">
            <img alt="cart-item" src={require(`../../assets${imageURL}`)} />
          </div>

          <div className="cart-item-information">
            <h5 className="cart-item-title">{name}</h5>
            <div className="cart-item-dec-inc">
              <Button
                style={{ borderRadius: "50%", padding: "0px", width: "20px" }}
                onClick={handleDecrement}
              >
                -
              </Button>
              <span className="cart-item-quantity">{quantity}</span>
              <Button
                style={{ borderRadius: "50%", padding: "0px", width: "20px" }}
                onClick={handleIncrement}
              >
                +
              </Button>
              <span>X</span>
              <span>Rs.{price}</span>
            </div>
          </div>

          <div className="cart-item-total-price">
            Rs.{cartItem.quantity * cartItem.price}
          </div>
        </Card>
      </div>
    </>
  );
};

export default CartItem;
