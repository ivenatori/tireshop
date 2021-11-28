import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import PrimarySearchAppBar from "./components/Header/Header";
import Home from "./components/Home/Home";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsContextProvider from "./contexts/ProductsContext";
import Auth from "./components/Auth/Auth";
import EditProducts from "./components/EditProduct/EditProducts";
import Filter from "./components/Filter/Filter";
import ValidationTextFields from "./components/Cart/Cart_form";
import Cart_form from "./components/Cart/Cart_form";
import Cart from "./components/Cart/Cart";
import HeaderMenu from "./components/Header/HeaderMenu";
import Purchase from "./components/Cart/Purchase";
import Favorites from "./components/Favorites/Favorites";
import Recalls from "./components/Recalls/Recalls";
import Footer from "./components/Footer/Footer";
const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <PrimarySearchAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ProductsList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/edit" element={<EditProducts />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/form" element={<Cart_form />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<HeaderMenu />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recalls" element={<Recalls />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
      <Footer/>
    </AuthContextProvider>
  );
};

export default MainRoutes;
