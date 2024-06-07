import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    const result = await axios.get("http://localhost:4001/products");
    console.log(result);
    setProducts(result.data.data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  const deletePost = (index) => {
    const post = [...products];
    post.splice(index, 1);
    setProducts(post);
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        {products.map((item, index) => {
          return (
            <div className="product" key={index}>
              <div className="product-preview">
                <img
                  src={"https://via.placeholder.com/350/350"}
                  alt="some product"
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>products name:{item.name}</h1>
                <h2>products price: {item.price}Baht</h2>
                <p>products description:{item.description}</p>
              </div>

              <button
                className="delete-button"
                onClick={() => deletePost(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
