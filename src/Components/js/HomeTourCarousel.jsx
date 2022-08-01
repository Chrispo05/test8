import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {tourNevado, tourParamillo,tourParamo,tourTapir,tourCocora,tourCarbonera} from "./ToursInfo.jsx";
import timeIcon from "../../Icons/duration.png";
import {ButtonCustom} from "./ButtonCustom.jsx";
import "../css/HomeTourCarousel.css";
import "../css/RootStyles.css";


function HomeTourCarouselCard(props) {
    return(
        <div className='shadow-1 HomeTourCarouselCardMainContainer hover-scale-005  '>
            <div className='  HomeTourCarouselTimeContainer '>   
                <div className='HomeTourCarouselTimeContainer color-b  '>
                     <img className='HomeTourCarouselCardTimeIcon '  src={timeIcon} alt='timeIcon'/>
                      {props.tourInfo.timeShortESP}  
                    
                </div>
            </div>
            <div>
                <img className='HomeTourCarouselCardImg' src={props.tourInfo.img1} alt='NevadoSalento'/>
            </div>
            <div className='flex-column'>
                <h3  className='HomeTourCarouselCardTitle color-a' > {props.tourInfo.nameESP}  </h3>
                <p className='HomeTourCarouselCardPrice color-b font-600 '>Desde {props.tourInfo.priceCOP}  </p>
                
                <div>
                    <ButtonCustom message="Ver más..." href={ `/tour?id=${props.tourInfo.tourID}`}/>
                </div>
            </div>
        </div>
    )
}
function HomeTourCarouselCardEng(props) {
    return(
        <div className='shadow-1 HomeTourCarouselCardMainContainer hover-scale-005  '>
            <div className='  HomeTourCarouselTimeContainer '>   
                <div className='HomeTourCarouselTimeContainer color-b  '>
                     <img className='HomeTourCarouselCardTimeIcon '  src={timeIcon} alt='timeIcon'/>
                      {props.tourInfo.timeShortENG}  
                    
                </div>
            </div>
            <div>
                <img className='HomeTourCarouselCardImg' src={props.tourInfo.img1} alt='NevadoSalento'/>
            </div>
            <div className='flex-column'>
                <h3  className='HomeTourCarouselCardTitle color-a' > {props.tourInfo.nameENG}  </h3>
                <p className='HomeTourCarouselCardPrice color-b font-600 '>From {props.tourInfo.priceUSD}  </p>
                
                <div>
                    <ButtonCustom message="See more..." href={ `/tourEng?id=${props.tourInfo.tourID}`}/>
                </div>
            </div>
        </div>
    )
}

function HomeTourCarousel() {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 540 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 540, min: 0 },
          items: 2.05
        }
      };
    return (
        <div className='flex-column '>   
            <Carousel responsive={responsive}  
                swipeable={true}
                draggable={false}
                showDots={false}
                slidesToSlide={1}
                minimumTouchDrag={50}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                centerMode={false}
                transitionDuration={300}
                containerClass="carousel-container"
                
                
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                    <div > <HomeTourCarouselCard tourInfo={tourNevado}  /> </div>
                    <div > <HomeTourCarouselCard tourInfo={tourParamillo}  /> </div>
                    <div > <HomeTourCarouselCard tourInfo={tourParamo}  /> </div>
                    <div > <HomeTourCarouselCard tourInfo={tourTapir}  /> </div>
                    <div > <HomeTourCarouselCard tourInfo={tourCocora}  /> </div>
                    <div > <HomeTourCarouselCard tourInfo={tourCarbonera}  /> </div>
            
            </Carousel>

            <div className='color-a font-400 HomeTourCarouselCardSlogan'>

                Conoce el <span className='font-600'>Tapir</span>, visita <span className='font-600'>La Carbonera</span>, disfruta de hermosos paisajes en <span className='font-600'>Cocora</span> y mucho más... 
               

            </div>
            <ButtonCustom className="HomeTourCarouselButton" message="Ver tours..." href="/tours"/>
        </div> 
    )
}
function HomeTourCarouselEng() {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 540 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 540, min: 0 },
          items: 2.05
        }
      };
    return (
        <div className='flex-column '>   
            <Carousel responsive={responsive}  
                swipeable={true}
                draggable={false}
                showDots={false}
                slidesToSlide={1}
                minimumTouchDrag={50}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                centerMode={false}
                transitionDuration={300}
                containerClass="carousel-container"
                
                
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                    <div > <HomeTourCarouselCardEng tourInfo={tourNevado}  /> </div>
                    <div > <HomeTourCarouselCardEng tourInfo={tourParamillo}  /> </div>
                    <div > <HomeTourCarouselCardEng tourInfo={tourParamo}  /> </div>
                    <div > <HomeTourCarouselCardEng tourInfo={tourTapir}  /> </div>
                    <div > <HomeTourCarouselCardEng tourInfo={tourCocora}  /> </div>
                    <div > <HomeTourCarouselCardEng tourInfo={tourCarbonera}  /> </div>
            
            </Carousel>

            <div className='color-a font-400 HomeTourCarouselCardSlogan'>

                Get to know <span className='font-600'>the Tapir</span>, visit <span className='font-600'>La Carbonera</span>, enjoy outstanding landscapes in <span className='font-600'>Cocora</span> and much more... 
               

            </div>
            <ButtonCustom className="HomeTourCarouselButton" message="See tours..." href="/toursEng"/>
        </div> 
    )
}

export{HomeTourCarousel,HomeTourCarouselEng};