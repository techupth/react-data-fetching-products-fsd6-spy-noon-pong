import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [blogProduct, setBlogProduct] = useState([]);

  const getBlogProduct = async () => {
    const getProduct = await axios.get("http://localhost:4001/products");
    setBlogProduct(getProduct.data.data);
  };

  const deleteBlogProduct = async (id) => {
    await axios.delete(`http://localhost:4001/products/${id}`);
    setBlogProduct((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  useEffect(() => {
    getBlogProduct();
  }, []);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        {blogProduct.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-preview">
                <img
                  src={product.image}
                  alt="some product"
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name}</h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description}</p>
              </div>
              <button className="delete-button" onClick={() => deleteBlogProduct(product.id)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

