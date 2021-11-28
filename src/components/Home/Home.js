import { GpsFixed } from "@mui/icons-material";
import { bgcolor } from "@mui/system";
import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import MainCarousel from "../MainCarousel/MainCarousel";
import { Link } from "react-router-dom";
import Favorites from "../../assets/css/favorites.png";
import "./Home.css";
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
const Home = () => {
  let style = {
    display: "block",
    position: "fixed",
    width: "50px",
    height: "50px",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "black",
    top: "80%",
    left: "5%",
    padding: "10px",
  };

  let styles = {
    display: "block",
    position: "fixed",
    width: "50px",
    height: "50px",
    color: "white",
    borderRadius: "50%",
    top: "50%",
    right: "10%",
  };
  let imgStyle = {
    "box-shadow": "1px 1px 30px #fff",
    "border-radius": "50%",
  };

  let showRecolls = {
    width: "300px",
    height: "70px",
    position: "fixed",
    bottom: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0,.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    borderRadius: "30px",
    textDecoration: "none",
  };
  return (
    <div>
      <Filter />
      <MainCarousel />
      <ButtonGroup size="lg" className="mb-2">
    <Button>R14</Button>
    <Button>R15</Button>
    <Button>R16</Button>
    <Button>R17</Button>
    <Button>R18</Button>
    
  </ButtonGroup>
  
      <ProductsList key="pizza" title="pizza" title2="R14" />
      <ProductsList key="sushi" title="sushi" title2="R15" />
      <ProductsList key="drinks" title="drinks" title2="R16" />
      <ProductsList key="r18" title="R18" title2="R18" />
      <a style={style} href="#header">
        top
      </a>
      <Link style={styles} to="/favorites">
        <img style={imgStyle} width="70px" height="70px" src={'https://cdn-icons.flaticon.com/png/512/4208/premium/4208408.png?token=exp=1637752310~hmac=659dcbb0ade3dabee850e6450afce469'}></img>
      </Link>
      <Link className="recolls-btn" style={showRecolls} to="./recalls">
        Отзывы
      </Link>
    </div>
  );
};

export default Home;
