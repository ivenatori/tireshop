import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MainCarousel.css'

const MainCarousel = () => {
    return (
        <div className="MyCarousel">
        <Carousel autoPlay showThumbs={false}>
           <div>
               <img className="firstP" src={'https://images.unsplash.com/photo-1559674697-7ebabb38c369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} alt="pizza"/>
               </div>
            <div>
               <img className="secondP" src={'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'} alt="pizza"/>
            </div> 
            <div>
               <img className="thirdP" src={'https://images.unsplash.com/photo-1580053852056-f3992ab1e5e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} alt="pizza"/>
             </div> 
        </Carousel>
        </div>
    );
};

export default MainCarousel;