import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
          {data.categories.map((category) => {
            return (
              category.meals.length > 0 && (
                <Category name={category.name} meals={category.meals} />
              )
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
