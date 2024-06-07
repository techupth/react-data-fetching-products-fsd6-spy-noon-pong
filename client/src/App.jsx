import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPost] = useState([]);

  const result = async () => {
    const posts = await axios.get("http://localhost:4001/products");
    setPost(posts.data.data)
  };

  const deleteResult = async (index) => {
     await axios.delete( `http://localhost:4001/products/${index} `);
  };

  useEffect(() => {
    result();
  }, [posts]);

  const deleteData = (index) =>{
    const data = [...posts]
    data.splice(index,1)
    setPost(data)
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      {posts.map((item,index)=>{
        return(<div className="product-list" key={index}>
          <div className="product">
          <div className="product-preview">
            <img
              src={item.image}
              alt="some product"
              width="350"
              height="350"
            />
          </div>
          <div className="product-detail">
            <h1>Product name: {item.name}</h1>
            <h2>Product price: {item.price} Baht</h2>
            <p>Product description: {item.description}</p>
          </div>
  
          <button className="delete-button" onClick={()=>{deleteResult(item.id)}}>x</button>
        </div>
        </div>)
        
      })}
      
        
      
    </div>
  );
}

export default App;
