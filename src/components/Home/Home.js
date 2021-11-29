import { GpsFixed, Grade } from "@mui/icons-material";
import { bgcolor } from "@mui/system";
import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import MainCarousel from "../MainCarousel/MainCarousel";
import { Link } from "react-router-dom";
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
    // backgroundColor: "black",
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
    right: "5%",
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
      {/* <MainCarousel /> */}
      
  
      <ProductsList key="r14" title="r14" title2="r14" />
      <ProductsList key="r15" title="r15" title2="r15" />
      <ProductsList key="r16" title="r16" title2="r16" />
      <ProductsList key="r17" title="r17" title2="r17" />
      <a style={style} href="#header">
      <img style={imgStyle} width="50px" height="50px" src={'http://cdn.onlinewebfonts.com/svg/img_158933.png'}></img>
      </a>
      <Link style={styles} to="/favorites">
        <img style={imgStyle} width="70px" height="70px" src={'https://icon-library.com/images/favorite-icon/favorite-icon-12.jpg'}></img>
        
      </Link>
      {/* <Link className="recolls-btn" style={showRecolls} to="./recalls">
        Отзывы
      </Link> */}
    </div>
  );
};

export default Home;
