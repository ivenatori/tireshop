import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './EditProducts.css'

const EditProducts = ({elem,openModal,setOpenModal}) => {
    const [editedProduct,setEditedProduct] = useState(elem)
    const {saveEditedProduct} = useContext(productsContext)


    function editProduct(elem){
        setOpenModal(!openModal)
    setEditedProduct({...editedProduct,id: elem.id})
    // console.log(editedProduct)
    saveEditedProduct(editedProduct,elem.id)
    document.querySelector('body').style.overflow=''
    }

    function closeBgModal(){
        setOpenModal(!openModal)
        document.querySelector('body').style.overflow=''
    }
    return (
        <>
        <div className='bg_modal' onClick={closeBgModal}></div>
        <div className='bg_edit_product'>
        <div className='container'>
        <div className='edit_product '>
        <div><input placeholder='выбрать товар' onChange={(e)=>setEditedProduct({...editedProduct,product: e.target.value})} list='data' type="text" />
            <datalist id='data'>
                <option value="r14"></option>
                <option value="r15"></option>
                <option value="r16"></option>    
                <option value="r17"></option>
                <option value=""></option>
                <option value=""></option>
            </datalist>
            </div>
            <div className='inp_block'><input value={editedProduct.Pname} onChange={(e)=>setEditedProduct({...editedProduct,Pname: e.target.value})} type="text" /><label>tire name</label></div>
            <div className='inp_block'><input value={editedProduct.image} onChange={(e)=>setEditedProduct({...editedProduct,image: e.target.value})} type="text" /><label>image</label></div>
            <div className='inp_block'><input value={editedProduct.about} onChange={(e)=>setEditedProduct({...editedProduct,about: e.target.value})} type="text" /><label>about</label></div>
            <div className='inp_block'><input value={editedProduct.priceSmall} onChange={(e)=>setEditedProduct({...editedProduct,priceSmall: e.target.value})} type="text" /><label>price</label></div>
            <button className='btn_save' onClick={(e)=>editProduct(elem)}>save</button>  
        </div>
        </div>
        </div>
        
        </>
    );
};

export default EditProducts;