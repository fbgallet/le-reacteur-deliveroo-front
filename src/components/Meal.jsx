import { updateQuantityOfItemInCart } from "../utils";

const Meal = ({ id, title, description, picture, popular, price, setCart }) => {
  const handleClick = (e) => {
    updateQuantityOfItemInCart(setCart, { id, title, price }, 1);
  };
  return (
    <div key={id} className="meal-wrapper" onClick={handleClick}>
      <div className="meal-infos">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="meal-price">
          <span>{price} €</span>
          {popular && <div className="popularity">Populaire</div>}
        </div>
      </div>
      {picture && <img src={picture} alt="meal picture" />}
    </div>
  );
};

export default Meal;
