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
        window.scrollBy(0,400)
    }

    return (
    <div>
        <div className='HomeHeroSectionMainContainer'>
            
            <Carousel  preventMovementUntilSwipeScrollTolerance={true} stopOnHover={false} infiniteLoop={true} autoPlay={1000} showThumbs={false} showStatus={false} showIndicators={false} >
               
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
           

           
           
            
        </div>
        <div className='HomeHeroMessageContainer color-f' >
                <p >Aventura es un estilo de vida!</p>
                <p >Nevado, Páramo, Cocora... </p>
                <p className='HomeHeroMessageP3' >ven a vivir! </p>
                <a  href='/tours' > <button className='hover-scale-02 HomeHeroButton' type='button'>Tours</button>  </a>
                
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
        window.scrollBy(0,400)
    }

    return (
    <div>
        <div className='HomeHeroSectionMainContainer'>
            
            <Carousel  preventMovementUntilSwipeScrollTolerance={true} stopOnHover={false} infiniteLoop={true} autoPlay={500} showThumbs={false} showStatus={false} showIndicators={false} >
               
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
           
            
        </div>
        <div className='HomeHeroMessageContainer color-f' >
                 <p >Adventure is a lifestyle!</p>
                 <p >Nevado, Páramo, Cocora... </p>
                 <p className='HomeHeroMessageP3' >Come live! </p>
                 <a  href='/toursEng' > <button className='hover-scale-02 HomeHeroButton' type='button'>Tours</button>  </a>
                
        </div>
        <div onClick={scrollDown} className='flex-row'>
                     <img className="hero-icon-down" src={HomeHerodownIcon} alt="icondown"/>
        </div>
    </div>
    )
}


export default HomeHeroCarousel;
export{HomeHeroCarouselEng};