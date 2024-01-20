export const updateQuantityOfItemInCart = (setCart, item, toAdd) => {
  setCart((cart) => {
    const { id, title, price } = item;
    const clonedCart = [...cart];
    const mealIndexInCart = clonedCart.findIndex((elt) => elt.id === id);
    if (mealIndexInCart !== -1) {
      const quantity = clonedCart[mealIndexInCart].quantity;
      quantity + toAdd <= 0
        ? clonedCart.splice(mealIndexInCart, 1)
        : (clonedCart[mealIndexInCart].quantity = quantity + toAdd);
    } else clonedCart.push({ id, title, price, quantity: 1 });
    return clonedCart;
  });
};
