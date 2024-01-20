import { useState, useEffect } from "react";
import Item from "./Item";

const deliveryFees = 2.5;

const Cart = ({ cart, setCart }) => {
  let total;

  if (cart.length === 0) return;
  let subTotal =
    cart.length > 1
      ? cart
          .map((item) => Number(item.price) * item.quantity)
          .reduce((total, item) => total + item)
      : Number(cart[0].price) * cart[0].quantity;
  total = subTotal.toFixed(2);

  return (
    <div className="cart">
      <button className={cart.length > 0 ? "cart-button-enabled" : null}>
        Valider mon panier
      </button>
      <div className="cart-content">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <Item key={item.id} {...item} setCart={setCart} />
            ))}
            <div className="sub-total">
              <div>
                <span>Sous-Total</span>
                <span>{total} €</span>
              </div>
              <div>
                <span>Frais de livraison</span>
                <span>2.5 €</span>
              </div>
            </div>

            <div className="total">
              <span>Total</span>
              <span>{(Number(total) + deliveryFees).toFixed(2)} €</span>
            </div>
          </>
        ) : (
          <div>Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
