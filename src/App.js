import './header.css';
import './App.css'
import ProductCard from './productlist';
import { useEffect, useState } from 'react';

function App() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    let productlist = await res.json();
    updateProducts(productlist);
  
  }

  if (products.length === 0) {
    return <h1>Fetching Data...</h1>;
  }

  return (
    <> 
    <div className='product-list'>
       {products.map((p) => <ProductCard key={p.id} {...p}/>)}
       </div>
    </>
  );
}

export default App;
