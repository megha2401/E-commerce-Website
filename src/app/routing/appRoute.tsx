import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewCart from "../modules/cart/viewCart";
// import LogInForm from "../modules/logIn/logIn";
import ProductDetail from "../modules/productDetail/productsDetail";
import ProductList from "../modules/products/ProductList";
import { Product } from "../modules/products/ProductList";
import { ProductDetails } from "../modules/productDetail/productsDetail";
import ViewWishlist from "../modules/wishlist/wishlist";

type AppRouteProps = {
  products: Product[];
  isLoading: boolean;
};

const AppRoute: React.FC<AppRouteProps> = ({ products, isLoading }) => {
  const [cart, setCart] = useState<ProductDetails[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  return (
    <>
      <div className="AppRoute">
        <Routes>
          {/* <Route path="/login" element={<LogInForm />} /> */}
          <Route
            path="/"
            element={
              <ProductList
                products={products}
                isLoading={isLoading}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            }
          />

          <Route
            path="/product/:id"
            element={<ProductDetail setCart={setCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<ViewCart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/wishlist"
            element={
              <ViewWishlist
                wishlist={wishlist}
                products={products}
                setWishlist={setWishlist}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default AppRoute;
