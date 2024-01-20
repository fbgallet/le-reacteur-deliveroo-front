import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import Category from "./components/Category";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("cart :>> ", cart);
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/");
        console.log("response :>> ", response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading data...</p>
  ) : (
    <>
      <div className="main-top">
        <Header />
        <Restaurant infos={data.restaurant} />
      </div>

      <main>
        <div className="content-wrapper">
          <div className="categories">
            {data.categories.map((category) => {
              return (
                category.meals.length > 0 && (
                  <Category
                    key={category.name}
                    name={category.name}
                    meals={category.meals}
                    setCart={setCart}
                  />
                )
              );
            })}
          </div>
          <div className="cart-wrapper">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
