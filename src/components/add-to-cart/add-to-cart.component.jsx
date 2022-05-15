import React, { useEffect, useState } from "react";
import Modal from "../ui/modal/modal.component";
import { ReactComponent as Cart } from "../../assets/static/images/cart.svg";
import "./add-to-cart.styles.scss";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import Card from "../ui/card/card.component";
import Button from "../ui/button/button.component";

const ModalHeader = ({ cart, show }) => {
  return (
    <>
      <div> My Cart ({cart.length} item)</div>
      <span className="modal-cross" onClick={show}>
        X
      </span>
    </>
  );
};

const ModalBody = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartItems.length > 0 ? (
        <div className="cart-body-image">
          <Card cardType="normal" style={{ backgroundColor: "white" }}>
            <img
              alt="body-image"
              src={require("../../assets/static/images/lowest-price.png")}
            />

            <span>You won't find it cheaper anywhere</span>
          </Card>
        </div>
      ) : (
        <div className="empty-cart">
          <h4>No items in your cart</h4>
          <span>Your favourite items are click away</span>
        </div>
      )}
    </>
  );
};

const ModalFooter = ({ cartItems, show }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);

    setTotalPrice(price);
  }, [cartItems]);
  return (
    <>
      {cartItems.length > 0 ? (
        <Card style={{ backgroundColor: "white", padding: "10px" }}>
          <div className="footer">
            <span>Promo code can be applied on payment page</span>
            <Button
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={show}
            >
              Procees to Checkout
              <span>Rs. {totalPrice} &gt; </span>
            </Button>
          </div>
        </Card>
      ) : (
        <Card style={{ backgroundColor: "white", padding: "10px" }}>
          <div className="footer">
            <Button style={{ width: "100%" }} onClick={show}>
              Start Shopping
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

const AddToCart = () => {
  const [show, setShow] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="cart-container" onClick={handleShow}>
        <Cart className="cart-icon" />
        <span className="cart-count">{cart.length} items</span>
      </div>

      {show && (
        <Modal
          show={show}
          header={<ModalHeader cart={cart} show={() => handleShow()} />}
          customClass={cart.length > 0 ? "filled" : "empty"}
          body={<ModalBody cartItems={cart} />}
          footer={<ModalFooter cartItems={cart} show={() => handleShow()} />}
        ></Modal>
      )}
    </>
  );
};

export default AddToCart;
