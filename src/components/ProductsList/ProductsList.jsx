import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import ReactPaginate from 'react-paginate'
import { productsContext } from '../../contexts/ProductsContext';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.css'

const ProductsList = ({title,title2}) => {
    const {products,getProducts} = useContext(productsContext)
    const [page, setPage] = useState(0)


let filteredProduct = products.filter(elem=>elem.product===title)


  const pageCount = Math.ceil(filteredProduct.length / 3)

    useEffect(()=>{
        getProducts()
    },[])
    function changePage({ selected }) {
        setPage(selected)
      }
      const productsPerPage = 3

      const pageVisited = page * productsPerPage
    
      const displayProducts = filteredProduct
        .slice(pageVisited, pageVisited + productsPerPage)
        .map((elem) => <ProductCard key={elem.id} elem={elem} />)
        

    return (
        <>
       
        <Grid container spacing={2}>
        
            <div id={title2} className='products_list'>
          
            <div className='container'>
                <div className='main_titles'>

                     <h2 className='product_title'>{title2}</h2><hr />
                </div>
                <div className='flex'>
                {displayProducts}
                </div>
            </div>
        </div>
        
        <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
        {/* <div className='products_list'>
            <div className='container'>
                <div className='flex'>
                    {products.map(elem=>(
                         <ProductCard key={elem.id} elem={elem}/>
                         ))}
                 </div>
            </div>
        </div> */}
        </Grid>
        </>
    );
};

export default ProductsList;