import React, { useState, useEffect } from "react";
import "./App.css";
import AppRoute from "./app/routing/appRoute";
import Footer from "./app/modules/footer/footer";
import { Product } from "./app/modules/products/ProductList";
import { fetchProducts } from "./app/shared/services/Service";
import Header from "./app/modules/header/header";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prod, setProd] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((res: any) => {
        const { products } = res.data;
        setProd(products);
        setFilteredProducts(products);
      })
      .catch((err: Error) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleSearch = (searchedProduct: string) => {
    setIsLoading(true);
    let filteredProds: Product[] = [];
    if (searchedProduct.length > 1) {
      filteredProds = prod.filter(
        (x) =>
          x.title.toLowerCase().includes(searchedProduct.toLowerCase()) ||
          x.brand.toLowerCase().includes(searchedProduct.toLowerCase())
      );
      setFilteredProducts([...filteredProds]);
      setIsLoading(false);
    } else {
      filteredProds = prod;
      setFilteredProducts([...filteredProds]);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header onSearch={handleSearch} />
          <AppRoute products={filteredProducts} isLoading={isLoading} />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
