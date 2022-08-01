
import {toursInfoArray} from "./ToursInfo.jsx"
import iconTemperature from "../../Icons/termogreenremastered.png";
import iconDuration from "../../Icons/repeat.png";
import iconDifficulty from "../../Icons/effort.png";
import iconDistance from "../../Icons/distanceremastered.png";
import iconLatitude from "../../Icons/mountains.png";
import React,{useState} from 'react';
import iconWhatsapp from "../../Icons/whatsapp.png";
import flechasArriba from "../../Icons/flechas-arriba.png";
import iconClose from "../../Icons/close.png";
import downArrow from "../../Icons/down-arrow.png";
import iconCheck from "../../Icons/checked.png";
import iconStart from "../../Icons/start.png";
import iconMoving from "../../Icons/moving.png";
import iconFinish from "../../Icons/finish.png";



//carousel
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
//css styles
import "../css/RootStyles.css";
import "../css/TourPage.css";
import "../css/Testimonials.css";
import { Testimonials } from "./Testimonials.jsx";
import { HomeTourCarousel, HomeTourCarouselEng } from "./HomeTourCarousel.jsx";

//


const locationSearch = document.location.search;
    const urlParams = new URLSearchParams(locationSearch);
         const tourId = urlParams.get('id');

let tourFound = toursInfoArray.find((tourInfoObj)=> tourInfoObj.tourID === tourId);


function Tour() {
   
//logic for getting included staff html from array
function getPHtmlWithArray(array) {

    
   return array.map(includedItem => {
         return(<p className=" color-h" > <img className="iconCheck" src={iconCheck} alt="checkicon" />  {includedItem}</p>)
    });

    

   
    

   
} 

//logic for getting itinerary staff html from array
function getPHtmlwithArrayItinerary(array) {
    return array.map((itineraryDayArray,ii)=>{
        return (<p className=" font-600 color-b">
            Día {ii + 1}
            {itineraryDayArray.map((itineraryDayItem,iii)=> {

                let iconDayItem;
                if(iii === 0){
                    iconDayItem = iconStart;
                }
                if(iii ===1 ){
                    iconDayItem = iconMoving;
                }
                if(iii ===2 ){
                    iconDayItem = iconMoving;
                }
                if(iii ===3 ){
                    iconDayItem = iconFinish;
                }
                return(<p className="color-h font-400"> <img className="itineraryDayItemIcon" alt="icon" src={iconDayItem}/> {itineraryDayItem}</p>)
            } )}
        </p>)
    })
}
    


//logic for the pricing expandible mobile menu
const [expandState, setExpandState] = useState(false);

const changeExpandState = ()=>{
    setExpandState(expandState? false : true)
}



//logic for the experience section expandible 
let [experienceExpandState, setExperienceExpandState] = useState(true);
    const changeExperienceExpandState = ()=> {
        setExperienceExpandState(experienceExpandState? false : true);
        
    }

//logic for the included text section expandible
let [includedExpandState, setIncludedExpandState] = useState(false);
    const changeIncludedExpandState = ()=>{
        setIncludedExpandState(includedExpandState? false : true)
    }

//logic for the itinerary text section expandible
let [itineraryExpandState, setItineraryExpandState] = useState(false);
    const changeItineraryExpandState = ()=>{
        setItineraryExpandState(itineraryExpandState? false : true)
    }


//logic for the recommendation text section expandible
let [recommendationExpandState, setRecommendationExpandState] = useState(false);
    const changeRecomendationsExpandState = ()=> {
        setRecommendationExpandState(recommendationExpandState? false : true)
    }

//logic for the comment section expandible
let [commentExpandState, setCommentExpandState] = useState(false);
    const changeCommentExpandState = ()=>{
        setCommentExpandState(commentExpandState? false : true);
    }



    return(
        <div>
            <div className="flex-row text-center font-600 color-a">
                  <p className="font-28  ">Expedición: {tourFound.nameESP}</p>
                  
            </div>
            <div >
               <div className="flex-column">
                    <div className="flex-row  flex-wrap-reverse TourPageInfoContainer">
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconTemperature} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Temperatura.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.temperatureESP}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconDuration} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Duración.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.timeShortESP}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconDifficulty} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Dificultad.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.difficulty}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconDistance} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Distancia.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.distance}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconLatitude} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Latitud.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.latitude}</p>
                                </div>
                            </div>
                            
                            
                        
                        </div>
               </div>

                <div className="flex-row">

                    <Carousel preventMovementUntilSwipeScrollTolerance={true} stopOnHover={true} infiniteLoop={true} autoPlay={0} showThumbs={true} showStatus={false} showIndicators={false} >
               
                            <div>
                                <img alt='nevado' src={tourFound.img1High} />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img2High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img3High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img4High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img5High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img6High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img7High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img8High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img9High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img10High}  />
                                
                                
                            </div>
                       
               
                    </Carousel>
                </div>



                <div className="TourPagePriceSectionMainContaier flex-column">
                    <img src={expandState? iconClose : flechasArriba} alt="icon flechas arriba " className={`TourPagePriceSectionArrowImg ${expandState? "TourPagePriceSectionArrowImg-show" : ""}  `}  onClick={changeExpandState } />
                    <div onClick={changeExpandState } className={`TourPagePriceSectionContainer ${expandState? "TourPagePriceSectionContainer-showContent" : ""} `}>
                        <div className="TourPagePriceSectionTextContainer">
                            <p className="font-18 mt-6">¿Cual es el <span className="font-600">precio? </span></p>
                            <p>1 persona: <span className="font-600 color-b"> {tourFound.price1PaxESP} </span>.</p>
                            <p>2 - 4 personas: <span className="font-600 color-b"> {tourFound.price2to4} </span> c/u.</p>
                            <p>5 - 8 personas: <span className="font-600 color-b"> {tourFound.price5to8} </span> c/u.</p>
                            <p>9 o más personas: <span className="font-600 color-b"> {tourFound.price5to8} </span> c/u.</p>
                            <div className="flex-column">
                                
                                <a className="flex-row TourPagePriceSectionA" target="_blank" rel="noopener noreferrer" href="https://wa.me/message/2IVZNZSIXXZYC1" >
                                    <img src={iconWhatsapp} alt="whatsappLogo" />
                                    <p className="color-b ml-05em font-600">Reserva al Whatsapp!</p>
                                </a>
                            </div>
                           

                        </div>

                    </div>


                </div>

              

                <div className="flex-row  TourPageInfoSectionsMainContainer ">
                    <div className="TourPageInfoSectionsContainer flex-column ">


                        <div className="TourPageExperienceSectionMainContainer  flex-column">
                            <div   className={` TourPageExperienceSectionContainer ${experienceExpandState? "TourPageExperienceSectionContainer-show":"" }`} >  
                                    <div onClick={changeExperienceExpandState} className=" hover-ml-05 TourPageInfoSectionTitle font-18 color-a">¿Cómo es esta <span className="font-600">experiencia?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className="color-h">
                                    {tourFound.experienceESP}
                                    </p>

                            </div>
                            <div  className={`  self-start TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${includedExpandState? "TourPageExperienceSectionContainer-show":"" }`} >  
                                    <div onClick={changeIncludedExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">¿Qué incluye tu <span className="font-600">tour?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className=" color-h">
                                    {getPHtmlWithArray(tourFound.includedESP)}
                                    </p>
                            </div>
                            <div  className={` TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${itineraryExpandState? "TourPageItinerarySectionContainer-show":"" }`} >  
                                    <div onClick={changeItineraryExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">¿Cómo es el <span className="font-600">Itinerario?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className="color-h">
                                    {getPHtmlwithArrayItinerary(tourFound.itineraryESP)}
                                    </p>
                            </div>
                            <div  className={`  self-start TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${recommendationExpandState? "TourPageExperienceSectionContainer-show":"" }`} >  
                                    <div onClick={changeRecomendationsExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">¿Qué se <span className="font-600">recomienda?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className="color-h">
                                    {getPHtmlWithArray(tourFound.recommendationsESP)}
                                    </p>
                            </div>
                            <div  className={`  self-start TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${commentExpandState? "TourPageItinerarySectionContainer-show":"" }`} >  
                                    <div onClick={changeCommentExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">¿Comentarios de <span className="font-600">TripAdvisor?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    
                                       <section>
                                            <Testimonials/>
                                       </section>
                                   
                            </div>
                           
                        

                        </div>
                        <div className="TourPagePriceSection2MainContainer  ">
                            <div className="TourPagePriceSection2Container color-a flex-column hover-scale-005">
                                <p className=" font-18 mt-6">¿Cual es el <span className="font-600 ">precio? </span></p>
                                <p className="hover-scale-005">1 persona: <span className="font-600 color-b"> {tourFound.price1PaxESP} </span>.</p>
                                <p className="hover-scale-005">2 - 4 personas: <span className="font-600 color-b"> {tourFound.price2to4} </span> c/u.</p>
                                <p className="hover-scale-005">5 - 8 personas: <span className="font-600 color-b"> {tourFound.price5to8} </span> c/u.</p>
                                <p className="hover-scale-005">9 o más personas: <span className="font-600 color-b"> {tourFound.price5to8} </span> c/u.</p>
                                <div className="flex-column">
                                    
                                    <a className="hover-scale-005 flex-row TourPagePriceSectionA" target="_blank" rel="noopener noreferrer" href="https://wa.me/message/2IVZNZSIXXZYC1" >
                                        <img src={iconWhatsapp} alt="whatsappLogo" />
                                        <p className="color-b ml-05em font-600">Reserva al Whatsapp!</p>
                                    </a>
                                </div>
                            

                            </div>
                        </div>
                       
                    </div>

                </div>


                <div>
                    <HomeTourCarousel/>
                </div>


               






            </div>

           









        </div>
       
    )
}
function TourEng() {
   
//logic for getting included staff html from array
function getPHtmlWithArray(array) {

    
   return array.map(includedItem => {
         return(<p className=" color-h" > <img className="iconCheck" src={iconCheck} alt="checkicon" />  {includedItem}</p>)
    });

    

   
    

   
} 

//logic for getting itinerary staff html from array
function getPHtmlwithArrayItinerary(array) {
    return array.map((itineraryDayArray,ii)=>{
        return (<p className=" font-600 color-b">
            Day {ii + 1}
            {itineraryDayArray.map((itineraryDayItem,iii)=> {

                let iconDayItem;
                if(iii === 0){
                    iconDayItem = iconStart;
                }
                if(iii ===1 ){
                    iconDayItem = iconMoving;
                }
                if(iii ===2 ){
                    iconDayItem = iconMoving;
                }
                if(iii ===3 ){
                    iconDayItem = iconFinish;
                }
                return(<p className="color-h font-400"> <img className="itineraryDayItemIcon" alt="icon" src={iconDayItem}/> {itineraryDayItem}</p>)
            } )}
        </p>)
    })
}
    


//logic for the pricing expandible mobile menu
const [expandState, setExpandState] = useState(false);

const changeExpandState = ()=>{
    setExpandState(expandState? false : true)
}



//logic for the experience section expandible 
let [experienceExpandState, setExperienceExpandState] = useState(true);
    const changeExperienceExpandState = ()=> {
        setExperienceExpandState(experienceExpandState? false : true);
        
    }

//logic for the included text section expandible
let [includedExpandState, setIncludedExpandState] = useState(false);
    const changeIncludedExpandState = ()=>{
        setIncludedExpandState(includedExpandState? false : true)
    }

//logic for the itinerary text section expandible
let [itineraryExpandState, setItineraryExpandState] = useState(false);
    const changeItineraryExpandState = ()=>{
        setItineraryExpandState(itineraryExpandState? false : true)
    }


//logic for the recommendation text section expandible
let [recommendationExpandState, setRecommendationExpandState] = useState(false);
    const changeRecomendationsExpandState = ()=> {
        setRecommendationExpandState(recommendationExpandState? false : true)
    }

//logic for the comment section expandible
let [commentExpandState, setCommentExpandState] = useState(false);
    const changeCommentExpandState = ()=>{
        setCommentExpandState(commentExpandState? false : true);
    }



    return(
        <div>
            <div className="flex-row text-center font-600 color-a">
                  <p className="font-28  ">Expedition: {tourFound.nameENG}</p>
                  
            </div>
            <div >
               <div className="flex-column">
                    <div className="flex-row  flex-wrap-reverse TourPageInfoContainer">
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconTemperature} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Temperature.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.temperatureENG}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconDuration} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Duration.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.timeShortENG}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconDifficulty} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Difficulty.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.difficulty}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconDistance} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">Distance.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.distance}</p>
                                </div>
                            </div>
                            <div className="flex-row  tourIconMainContainer">
                                <div className="flex-column tourIconContainer">
                                    <img src={iconLatitude} alt="iconTemperature"   />
                                </div>
                                <div className="TourIconTextContainer">   
                                    <p className="color-a font-14 md-font-18 font-600">latitude.</p>
                                    <p className="color-h font-14 md-font-16">{tourFound.latitude}</p>
                                </div>
                            </div>
                            
                            
                        
                        </div>
               </div>

                <div className="flex-row">

                    <Carousel preventMovementUntilSwipeScrollTolerance={true} stopOnHover={true} infiniteLoop={true} autoPlay={0} showThumbs={true} showStatus={false} showIndicators={false} >
               
                            <div>
                                <img alt='nevado' src={tourFound.img1High} />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img2High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img3High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img4High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img5High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img6High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img7High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img8High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img9High}  />
                                
                                
                            </div>
                            <div>
                                <img alt='nevado'  src={tourFound.img10High}  />
                                
                                
                            </div>
                       
               
                    </Carousel>
                </div>



                <div className="TourPagePriceSectionMainContaier flex-column">
                    <img src={expandState? iconClose : flechasArriba} alt="icon flechas arriba " className={`TourPagePriceSectionArrowImg ${expandState? "TourPagePriceSectionArrowImg-show" : ""}  `}  onClick={changeExpandState } />
                    <div onClick={changeExpandState } className={`TourPagePriceSectionContainer ${expandState? "TourPagePriceSectionContainer-showContent" : ""} `}>
                        <div className="TourPagePriceSectionTextContainer">
                            <p className="font-18 mt-6">What is the <span className="font-600">price? </span></p>
                            <p>1 Pax: <span className="font-600 color-b"> {tourFound.price1PaxUSD} </span>.</p>
                            <p>2 - 4 Pax: <span className="font-600 color-b"> {tourFound.price2to4USD} </span> each.</p>
                            <p>5 - 8 Pax: <span className="font-600 color-b"> {tourFound.price5to8USD} </span> each.</p>
                            <p>9 or more Pax: <span className="font-600 color-b"> {tourFound.price5to8USD} </span> each.</p>
                            <div className="flex-column">
                                
                                <a className="flex-row TourPagePriceSectionA" target="_blank" rel="noopener noreferrer" href="https://wa.me/message/2IVZNZSIXXZYC1" >
                                    <img src={iconWhatsapp} alt="whatsappLogo" />
                                    <p className="color-b ml-05em font-600">Book it via Whatsapp!</p>
                                </a>
                            </div>
                           

                        </div>

                    </div>


                </div>

              

                <div className="flex-row   ">
                    <div className="TourPageInfoSectionsContainer flex-column ">


                        <div className="TourPageExperienceSectionMainContainer  flex-column">
                            <div   className={` TourPageExperienceSectionContainer ${experienceExpandState? "TourPageExperienceSectionContainer-show":"" }`} >  
                                    <div onClick={changeExperienceExpandState} className=" hover-ml-05 TourPageInfoSectionTitle font-18 color-a">How is this <span className="font-600">experience?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className="color-h">
                                    {tourFound.experienceENG}
                                    </p>

                            </div>
                            <div  className={`  self-start TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${includedExpandState? "TourPageExperienceSectionContainer-show":"" }`} >  
                                    <div onClick={changeIncludedExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">What does it <span className="font-600">include?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className=" color-h">
                                    {getPHtmlWithArray(tourFound.includedENG)}
                                    </p>
                            </div>
                            <div  className={` TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${itineraryExpandState? "TourPageItinerarySectionContainer-show":"" }`} >  
                                    <div onClick={changeItineraryExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">How is the <span className="font-600">Itinerary?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className="color-h">
                                    {getPHtmlwithArrayItinerary(tourFound.itinenraryENG)}
                                    </p>
                            </div>
                            <div  className={`  self-start TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${recommendationExpandState? "TourPageExperienceSectionContainer-show":"" }`} >  
                                    <div onClick={changeRecomendationsExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">What do we <span className="font-600">recommend?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    <p className="color-h">
                                    {getPHtmlWithArray(tourFound.recommendationsENG)}
                                    </p>
                            </div>
                            <div  className={`  self-start TourPageExperienceSectionContainer TourPageIncludedSectionContainer ${commentExpandState? "TourPageItinerarySectionContainer-show":"" }`} >  
                                    <div onClick={changeCommentExpandState} className="hover-ml-05 TourPageInfoSectionTitle font-18 color-a">Comments from <span className="font-600">TripAdvisor?</span> <img className="TourPageExperienceSectionIcon" alt="icon" src={downArrow}/> </div>
                                    
                                       <section>
                                            <Testimonials/>
                                       </section>
                                   
                            </div>
                           
                        

                        </div>
                        <div className="TourPagePriceSection2MainContainer  ">
                            <div className="TourPagePriceSection2Container color-a flex-column hover-scale-005">
                                <p className=" font-18 mt-6">What is the <span className="font-600 ">price? </span></p>
                                <p className="hover-scale-005">1 Pax: <span className="font-600 color-b"> {tourFound.price1PaxUSD} </span>.</p>
                                <p className="hover-scale-005">2 - 4 Pax: <span className="font-600 color-b"> {tourFound.price2to4USD} </span> each.</p>
                                <p className="hover-scale-005">5 - 8 Pax: <span className="font-600 color-b"> {tourFound.price5to8USD} </span> each.</p>
                                <p className="hover-scale-005">9 o más Pax: <span className="font-600 color-b"> {tourFound.price5to8USD} </span>   each.</p>
                                <div className="flex-column">
                                    
                                    <a className="hover-scale-005 flex-row TourPagePriceSectionA" target="_blank" rel="noopener noreferrer" href="https://wa.me/message/2IVZNZSIXXZYC1" >
                                        <img src={iconWhatsapp} alt="whatsappLogo" />
                                        <p className="color-b ml-05em font-600">Book it via Whatsapp!</p>
                                    </a>
                                </div>
                            

                            </div>
                        </div>
                       
                    </div>

                </div>


                <div>
                    <HomeTourCarouselEng/>
                </div>


               






            </div>

           









        </div>
       
    )
}

export {Tour,TourEng}