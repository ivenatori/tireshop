import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import ProductCard from '../ProductsList/ProductCard/ProductCard';
import './Favorites.css'

const Favorites = () => {
    const {favorites,getFavorites} = useContext(productsContext)
    console.log(favorites)

    useEffect(()=>{
        getFavorites();
    },[])

    let h1Style = {
        margin: '0 auto',
        'font-size': '30px',
        color: 'pink'

    }
    return (
        <div className='favorites'>
        <div className='container'>
            <div style={h1Style}><h1>Избранные</h1></div>
            <div className='favorites-flex'>
                {favorites?(
            favorites.map(elem=>(
                <ProductCard key={elem.id+1000} elem={elem}/>
            ))
                ):'ИЗБРАННЫХ НЕТ'}
            </div>
        </div>
        </div>
    );
};

export default Favorites;