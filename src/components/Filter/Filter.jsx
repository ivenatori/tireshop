import React, { useContext } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import history from '../../helpers/history';
import './Filter.css'


const Filter = () => {
    const {getProducts} = useContext(productsContext)

    // function handleFilter(e) {
    //     console.log(e)
    //     const search = new URLSearchParams(history.location.search)
    //     search.set('product', e)
    //     history.push(`${history.location.pathname}?${search.toString()}`)
 
    //     getProducts(search.toString())
    //   }
    return (
        <div className='filter'>
            <div className='container'>
                    <div className='filter_menu'>
                        <ul className='filter_menu-flex'>
                            <a href='#r14'><li>R14</li></a>
                            <a href='#r15'><li>R15</li></a>
                            <a href='#r16'><li>R16</li></a>
                            <a href='#r17'><li>R17</li></a>
                           
                        </ul>
                    </div>
            </div>
            
        </div>
    );
};

export default Filter;