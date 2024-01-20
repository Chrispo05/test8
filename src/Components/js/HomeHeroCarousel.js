import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/HomeHeroCarousel.css"
import "../css/RootStyles.css"
import HomeHerodownIcon from "../../Icons/down.png"

import {tourNevado,tourCarbonera,tourParamillo,tourParamo, tourCocora, tourTapir} from "./ToursInfo.jsx"


function HomeHeroCarousel() {

    
    // logic for scroll down button
    function scrollDown() {
        window.scrollBy({
            top: 800,
            left:0,
            behavior: "smooth"

        })
    }

    return (
    <div className='HomeHeroSectionOutsideContainer'>
        <div className='HomeHeroSectionMainContainer '>
            
            <Carousel  preventMovementUntilSwipeScrollTolerance={true} swipeable={true} stopOnHover={false} infiniteLoop={true} autoPlay={1000} showThumbs={false} showStatus={false} showIndicators={true} >
               
                <div>
                    <img alt='nevado' src={tourNevado.img1High} />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourParamillo.img1High}  />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourParamo.img1High}  />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourCarbonera.img2High}  />
                 
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourCocora.img3High}  />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourTapir.img2High}  />
                    
                    
                </div>
                
            </Carousel>
           

            <div className='HomeHeroMessageContainer color-a font-20' >
                <p className='HomeHeroTitle ' > <span className='font-600  color-b'>Aventura</span> es un estilo de vida!</p>
                {/* <p className='HomeHeroSlogan'>Nevado, Páramo, Cocora... </p> */}
                <p className='HomeHeroMessageP3 ' >ven a <span className='color-b font-600'>vivir!</span> </p>
                <a className='HomeHeroButtona'  href='#/tours' > <button className='hover-scale-02 HomeHeroButton' type='button'>Tours</button>  </a>
                
             </div> 
           
            
        </div>
       
        <div onClick={scrollDown} className='flex-row'>
                     <img className="hero-icon-down" src={HomeHerodownIcon} alt="icondown"/>
        </div>
    </div>
    )
}

function HomeHeroCarouselEng() {
        
    
    // logic for scroll down button
    function scrollDown() {
        window.scrollBy({
            top: 800,
            left:0,
            behavior: "smooth"

        })
    }

    return (
    <div className='HomeHeroSectionOutsideContainer'>
        <div className='HomeHeroSectionMainContainer '>
            
            <Carousel  preventMovementUntilSwipeScrollTolerance={false} swipeable={true} stopOnHover={false} infiniteLoop={true} autoPlay={1000} showThumbs={false} showStatus={false} showIndicators={true} >
               
                <div>
                    <img alt='nevado' src={tourNevado.img1High} />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourParamillo.img1High}  />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourParamo.img1High}  />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourCarbonera.img2High}  />
                 
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourCocora.img3High}  />
                    
                    
                </div>
                <div>
                    <img alt='nevado'  src={tourTapir.img2High}  />
                    
                    
                </div>
                
            </Carousel>
           

            <div className='HomeHeroMessageContainer color-a' >
                <p className='HomeHeroTitle' > <span className='font-600 font-16 color-b'>Adventure</span> is a lifestyle!</p>
                {/* <p className='HomeHeroSlogan'>Nevado, Páramo, Cocora... </p> */}
                <p className='HomeHeroMessageP3 ' >come <span className='color-b font-600'>live!</span> </p>
                <a className='HomeHeroButtona'  href='#/tours' > <button className='hover-scale-02 HomeHeroButton' type='button'>Tours</button>  </a>
                
             </div> 
           
            
        </div>
       
        <div onClick={scrollDown} className='flex-row'>
                     <img className="hero-icon-down" src={HomeHerodownIcon} alt="icondown"/>
        </div>
    </div>
    )
}


export default HomeHeroCarousel;
export{HomeHeroCarouselEng};