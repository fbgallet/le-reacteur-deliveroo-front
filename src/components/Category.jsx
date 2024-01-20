import Meal from "./Meal";

const Category = ({ name, meals, setCart }) => {
  return (
    <div key={name} className="category-wrapper">
      <h2>{name}</h2>
      <div className="meals-list">
        {meals.map((meal) => (
          <Meal key={meal.id} {...meal} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Category;
