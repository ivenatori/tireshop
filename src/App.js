import React from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import MainRoutes from "./MainRoutes";
import PrimarySearchAppBar from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
};

export default App;
