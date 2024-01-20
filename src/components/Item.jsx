import { updateQuantityOfItemInCart } from "../utils";

const Item = ({ id, title, price, quantity, setCart }) => {
  return (
    <div className="cart-item">
      <div className="item-buttons">
        <button
          onClick={() => {
            updateQuantityOfItemInCart(setCart, { id }, -1);
          }}
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => {
            updateQuantityOfItemInCart(setCart, { id }, 1);
          }}
        >
          +
        </button>
      </div>
      <div>{title}</div>
      <div>{(Number(price) * quantity).toFixed(2)} €</div>
    </div>
  );
};

export default Item;
