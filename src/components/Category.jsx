import Meal from "./Meal";

const Category = ({ name, meals }) => {
  return (
    <div className="category-wrapper">
      <h2>{name}</h2>
      <div className="meals-list">
        {meals.map((meal) => (
          <Meal {...meal} />
        ))}
      </div>
    </div>
  );
};

export default Category;
