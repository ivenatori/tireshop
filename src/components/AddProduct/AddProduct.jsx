import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './AddProduct.css'
import {Link} from 'react-router-dom'

const AddProduct = () => {
    const {addNewProduct} = useContext(productsContext)
    const [product,setProduct]=useState({})

    function addProduct(){
        addNewProduct(product)
    }

    return (
        <div className='bg_add_product'>
        <div className='container'>
        <div className='add_product '>
            <div><input onChange={(e)=>setProduct({...product,product: e.target.value})} list='data' type="text" />
            <datalist id='data'>
                <option value="pizza"></option>
                <option value="sushi"></option>
                <option value="drinks"></option>
                <option value="sous"></option>
                <option value=""></option>
                <option value=""></option>
            </datalist>
            </div>
            <div><input required onChange={(e)=>setProduct({...product,Pname: e.target.value})} type="text" /><label>tire name</label></div>
            <div><input required onChange={(e)=>setProduct({...product,image: e.target.value})} type="text" /><label>image</label></div>
            <div><input required onChange={(e)=>setProduct({...product,about: e.target.value})} type="text" /><label>about</label></div>
            <div><input required onChange={(e)=>setProduct({...product,priceSmall: e.target.value})} type="text" /><label>price small</label></div>
            <div><input required onChange={(e)=>setProduct({...product,priceLarge: e.target.value})} type="text" /><label>price large</label></div>
            <Link className='btn_link'  to='/'><button className='btn_add' onClick={()=>addProduct()}>add</button></Link>
        </div>
        </div>
        </div>
    );
};

export default AddProduct;