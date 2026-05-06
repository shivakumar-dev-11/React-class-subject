import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  //storing the data
  const apiCall = async () => {
    try {
      const data = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // filtering the products
  const FilterProducts = async (amount) => {
    try {
      const value = amount.target.value;
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/?price=${value}`,
      );
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <h1>E-commerce application</h1>
      <input
        onChange={FilterProducts}
        type="text"
        placeholder="Search for products"
      />
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <img src={product.images?.[0]} alt="product" width="120" />
            <h3>{product.title}</h3>
            <p>{product.category.name}</p>
            <h4>${product.price}</h4>
          </div>
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </>
  );
}

export default Products;
