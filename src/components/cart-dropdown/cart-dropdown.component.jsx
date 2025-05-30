import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context.jsx";

import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.componenet.jsx";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  // return (
  //   <div className="cart-dropdown-container">
  //     <div className="cart-items">
  //       {cartItems.map((item) => (
  //         <CartItem key={item.id} cartItem={item} />
  //       ))}
  //     </div>
  //     <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
  //   </div>
  // );

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler} disabled={cartItems.length === 0}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
