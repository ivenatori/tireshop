import React, { createContext, useReducer } from "react";
import axios from "axios";
import {
  calcSubPrice,
  calcSubPriceSmall,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/cartFunctions";
import { useAuth } from "./AuthContext";
export const productsContext = createContext();

const INIT_STATE = {
  products: [],
  currentProduct: {},
  cartLength: getCountProductsInCart(),
  cart: {},
  favorites: [],
  recalls: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "CHANGE_CARD_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    case "GET_RECALLS":
      return { ...state, recalls: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { email } = useAuth();

  const getProducts = async (params = "") => {
    const { data } = await axios(`http://localhost:8000/products?${params}`);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //добавление новых шин
  async function addNewProduct(newProduct) {
    await axios.post(`http://localhost:8000/products`, newProduct);
    getProducts();
  }
  //удаление продукта
  function deleteProduct(id) {
    axios.delete(`http://localhost:8000/products/${id}`);
    getProducts();
  }
  //изменение продукта
  async function saveEditedProduct(editedProduct, id) {
    await axios.patch(`http://localhost:8000/products/${id}`, editedProduct);

    getProducts();
  }

  // Cart// Basket

  function getProductsFromBasket() {
    let productInBasket = JSON.parse(localStorage.getItem("Basket"));
    if (!productInBasket) {
      productInBasket = {
        cardToBasket: [],
        totalPrice: 0,
      };
    }
    // productInBasket.totalPrice = totalPrice;
    dispatch({
      type: "GET_CART",
      payload: productInBasket,
    });
  }

  function addToBasket(cardToBasket) {
    let productInBasket = JSON.parse(localStorage.getItem("Basket"));
    if (!productInBasket) {
      productInBasket = {
        cardToBasket: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: cardToBasket,
      countSmall: 1,
      subPriceSmall: +cardToBasket.priceSmall,
      subPrice: 0,
    };

    let filteredCard = productInBasket.cardToBasket.filter(
      (elem) => elem.item.id === cardToBasket.id
    );
    if (filteredCard.length > 0) {
      productInBasket.cardToBasket.filter(
        (elem) => elem.item.id !== cardToBasket.id
      );
    } else {
      productInBasket.cardToBasket.push(newProduct);
    }

    newProduct.subPrice =
      productInBasket.cardToBasket.subPriceSmall ;

    productInBasket.totalPrice = calcTotalPrice(productInBasket.cardToBasket);

    // productInBasket.cardToBasket.push(newPeoduct);
    localStorage.setItem("Basket", JSON.stringify(productInBasket));

    dispatch({
      type: "CHANGE_CARD_COUNT",
      payload: productInBasket.cardToBasket.length,
    });

    getProductsFromBasket();
  }

  function changeSmallProductCount(count = 1, id) {
    let cart = JSON.parse(localStorage.getItem("Basket"));
    cart.cardToBasket = cart.cardToBasket.map((elem) => {
      console.log(elem.item);
      if (elem.item.id === id) {
        elem.countSmall = count;
        elem.subPriceSmall = calcSubPriceSmall(elem);
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.cardToBasket);
    localStorage.setItem("Basket", JSON.stringify(cart));
    getProductsFromBasket();
  }

  // function changeLargeProductCount(count = 0, id) {
  //   let cart = JSON.parse(localStorage.getItem("Basket"));
  //   cart.cardToBasket = cart.cardToBasket.map((elem) => {
  //     if (elem.item.id === id) {
  //       elem.countLarge = count;
  //       elem.subPriceLarge = calcSubPriceLarge(elem);
  //       elem.subPrice = calcSubPrice(elem);

  //       console.log(elem.priceSmall);
  //     }
  //     return elem;
  //   });
  //   cart.totalPrice = calcTotalPrice(cart.cardToBasket);
  //   localStorage.setItem("Basket", JSON.stringify(cart));
  //   getProductsFromBasket();
  // }

  // favorite

  function getFavorites() {
    let data = JSON.parse(localStorage.getItem("favorites"));

    dispatch({
      type: "GET_FAVORITES",
      payload: data,
    });
  }

  function addFavorite(item) {
    if (
      !JSON.parse(localStorage.getItem("favorites")) &&
      JSON.parse(localStorage.getItem("favorites")) !== []
    ) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    let data = JSON.parse(localStorage.getItem("favorites"));

    let newData = data.filter((elem) => elem.id !== item.id);
    console.log(data);
    newData.push(item);
    localStorage.setItem("favorites", JSON.stringify(newData));

    getFavorites();
  }
  //recalls

  async function getRecalls() {
    let { data } = await axios("http://localhost:8000/recalls");

    dispatch({
      type: "GET_RECALLS",
      payload: data,
    });
  }

  function sendRecall(recall) {
    axios.post(`http://localhost:8000/recalls`, recall);
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        dispatch,
        getProducts,
        addNewProduct,
        deleteProduct,
        saveEditedProduct,
        addToBasket,
        cartLength: state.cartLength,
        cart: state.cart,
        addFavorite,
        getProductsFromBasket,
        favorites: state.favorites,
        changeSmallProductCount,
        getFavorites,
        getRecalls,
        sendRecall,
        recalls: state.recalls,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
