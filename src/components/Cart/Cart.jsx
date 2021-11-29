import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext';
import './Cart.css'
import {
    calcSubPrice,
    calcSubPriceSmall,
    calcTotalPrice,
    getCountProductsInCart,
  } from "../../helpers/cartFunctions"

const Cart = () => {
    const {dispatch,getProductsFromBasket,cart,changeSmallProductCount} = useContext(productsContext)
    useEffect(()=>{
        getProductsFromBasket()
    },[])

    function deleteFromBasket (id){
        let data = JSON.parse(localStorage.getItem('Basket'))
        console.log(data)
        let filteredData = {...data,cardToBasket: data.cardToBasket.filter(elem=>elem.item.id!==id)}
       
        filteredData.totalPrice = calcTotalPrice(filteredData.cardToBasket)

        localStorage.setItem('Basket',JSON.stringify(filteredData))
        dispatch({
            type: "CHANGE_CARD_COUNT",
            payload: filteredData.cardToBasket.length,
          });
        // getProducts()
        getProductsFromBasket()
    }

    // console.log(cart.cardToBasket)
    return (
<div className='container'>
    <div className='cart'>
        {cart.cardToBasket?(
        <div>
            <div className='cart_table'>
                <div className='card_cart'>
                    {cart.cardToBasket.map(elem=>(

         <div className='thead' key={elem.item.id}>
            <div className='cart_block'> 
                <div className='img-cart'>
                    <img className='cart_image' src={elem.item.image} alt="product img" />
                
                </div>
                <div>
                    <h2>{elem.item.Pname}</h2>
                </div>
            </div>
            <div className='cart_block'>
                <div>
                    <span>Количество</span><br />
                    <input  type="number" min='0' onChange ={(e)=> changeSmallProductCount(e.target.value,elem.item.id)}/>
                </div>

            </div>

            <div className='cart_block'>           
              <div>{calcSubPriceSmall(elem)}  <br /><span>Сумма</span></div>
              <div><button className='btn_delete_cart' onClick={()=>deleteFromBasket(elem.item.id)}>X</button></div>
            </div>                
        </div>

                    ))}
                   
                </div>
            </div>
            <h4 className='total_price'>Total: {calcTotalPrice(cart.cardToBasket)}</h4>
           <Link  className='a_buy' to="/form"> <button className='btn_buy'>Купить</button></Link>
        </div>
        ):  (<CircularProgress/>)}
    </div>
</div>
    
    );
};

export default Cart;