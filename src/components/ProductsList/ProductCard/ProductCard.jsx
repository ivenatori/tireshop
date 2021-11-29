import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import React, { useContext, useState } from 'react';
import { productsContext } from '../../../contexts/ProductsContext';
import EditProducts from '../../EditProduct/EditProducts';
import './ProductCard.css'
import { checkProductInCart } from "../../../helpers/cartFunctions";
import { useAuth } from '../../../contexts/AuthContext';
import LickIcon from '../../../assets/css/lick-product.jpeg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({elem}) => {
    const {deleteProduct,addToBasket,addFavorite} = useContext(productsContext)
    const { user } = useAuth();
    // console.log(email)
    const [priceSize,setPriceSize] = useState(false)
    const [openModal,setOpenModal] = useState(false)
    

    function openModalEdit(){
        setOpenModal(!openModal)
        document.querySelector('body').style.overflow='hidden'
    }


    // console.log(elem)
    return (
        <>
        <div className='product_card'>
            <div className='tire_image'>
                 <img className='product_img' src={elem.image} alt="" />
                 <img className='lick'  src={LickIcon} alt="" onClick={()=>addFavorite(elem)}/>
            </div>
            
            <div className='tire_name'><h2>{elem.Pname}</h2></div>
            <div className='tire_about'>{elem.about}</div>
            
            
            <div className='tire_price'>
                <button onClick={() => addToBasket(elem)} className='btn_to_basket'><ShoppingCartIcon></ShoppingCartIcon></button>
                <span className='product_price'>{priceSize?`${elem.priceLarge} с`:`${elem.priceSmall} с`}</span>
                </div>
          {(user.email=='erlan@gmail.com'||user.email=='chingiz@gmail.com')&&<div><button className='btn_delete_card' onClick={(e)=>deleteProduct(elem.id)}>delete</button><button className='btn_delete_card' onClick={openModalEdit}>edit</button></div>}
        </div>
        {openModal&&<EditProducts 
        elem={elem}
        openModal={openModal}
        setOpenModal={setOpenModal}
        />}
        </>
    );
};

export default ProductCard;