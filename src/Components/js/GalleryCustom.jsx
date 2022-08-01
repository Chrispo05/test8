import React from 'react';

import Gallery from 'react-grid-gallery';
import "../css/GalleryCustom.css";
import "../css/RootStyles.css";
import {toursInfoArray} from "../js/ToursInfo"
import { HomeTourCarousel, HomeTourCarouselEng } from './HomeTourCarousel';





const IMAGES =
[{
        src: `${toursInfoArray[0].img3High}`,
        thumbnail: `${toursInfoArray[0].img3}`,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        isSelected: false,
        caption: `${toursInfoArray[0].nameESP}`
},
{
        src: `${toursInfoArray[0].img2High}`,
        thumbnail: `${toursInfoArray[0].img2}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[0].nameESP}`
},
{
        src: `${toursInfoArray[0].img1High}`,
        thumbnail: `${toursInfoArray[0].img1}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[0].nameESP}`
},
{
        src: `${toursInfoArray[0].img4High}`,
        thumbnail: `${toursInfoArray[0].img4}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[0].nameESP}`
},
{
        src: `${toursInfoArray[1].img1High}`,
        thumbnail: `${toursInfoArray[1].img1}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[1].nameESP}`
},
{
        src: `${toursInfoArray[1].img2High}`,
        thumbnail: `${toursInfoArray[1].img2}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[1].nameESP}`
},
{
        src: `${toursInfoArray[1].img3High}`,
        thumbnail: `${toursInfoArray[1].img3}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[1].nameESP}`
},
{
        src: `${toursInfoArray[1].img8High}`,
        thumbnail: `${toursInfoArray[1].img8}`,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[1].nameESP}`
},
{
        src: `${toursInfoArray[2].img1High}`,
        thumbnail: `${toursInfoArray[2].img1}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[2].img9High}`,
        thumbnail: `${toursInfoArray[2].img9}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[2].img3High}`,
        thumbnail: `${toursInfoArray[2].img3}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[2].img4High}`,
        thumbnail: `${toursInfoArray[2].img4}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[1].img6High}`,
        thumbnail: `${toursInfoArray[1].img6}`,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[1].nameESP}`
},
{
        src: `${toursInfoArray[2].img6High}`,
        thumbnail: `${toursInfoArray[2].img6}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[2].img7High}`,
        thumbnail: `${toursInfoArray[2].img7}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[2].img8High}`,
        thumbnail: `${toursInfoArray[2].img8}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[2].nameESP}`
},
{
        src: `${toursInfoArray[1].img7High}`,
        thumbnail: `${toursInfoArray[1].img7}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[1].nameESP}`
},
{
        src: `${toursInfoArray[3].img7High}`,
        thumbnail: `${toursInfoArray[3].img7}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[3].nameESP}`
},
{
        src: `${toursInfoArray[3].img1High}`,
        thumbnail: `${toursInfoArray[3].img1}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[3].nameESP}`
},
{
        src: `${toursInfoArray[4].img1High}`,
        thumbnail: `${toursInfoArray[4].img1}`,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[4].nameESP}`
},
{
        src: `${toursInfoArray[4].img2High}`,
        thumbnail: `${toursInfoArray[4].img2}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[4].nameESP}`
},
{
        src: `${toursInfoArray[5].img2High}`,
        thumbnail: `${toursInfoArray[5].img2}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[5].nameESP}`
},
{
        src: `${toursInfoArray[4].img3High}`,
        thumbnail: `${toursInfoArray[4].img3}`,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[4].nameESP}`
},
{
        src: `${toursInfoArray[5].img3High}`,
        thumbnail: `${toursInfoArray[5].img3}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[5].nameESP}`
},
{
        src: `${toursInfoArray[3].img2High}`,
        thumbnail: `${toursInfoArray[3].img2}`,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[3].nameESP}`
},
{
        src: `${toursInfoArray[4].img4High}`,
        thumbnail: `${toursInfoArray[4].img4}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[4].nameESP}`
},
{
        src: `${toursInfoArray[5].img4High}`,
        thumbnail: `${toursInfoArray[5].img4}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[5].nameESP}`
},
{
        src: `${toursInfoArray[5].img5High}`,
        thumbnail: `${toursInfoArray[5].img5}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
       
        caption: `${toursInfoArray[5].nameESP}`
}



]

function GalleryCustom() {
  console.log(toursInfoArray)
    return (
      <div className='GalleryCustomMainContainer flex-column mt-10' >
        <p className='md-font-18 lg-font-20 color-a font-600 '>Captura momentos <span className='color-b'>épicos</span> con <span className='color-b'>nosotros...</span> </p>
        <div className='GalleryCustomContainer '> 
            <Gallery  backdropClosesModal={true} images={IMAGES} showLightboxThumbnails={true}/>
            <HomeTourCarousel/>
        </div>
      </div>
    )
}
function GalleryCustomEng() {
  console.log(toursInfoArray)
    return (
      <div className='GalleryCustomMainContainer flex-column mt-10' >
        <p className='md-font-18 lg-font-20 color-a font-600 '>Keep <span className='color-b'>epic moments</span> with <span className='color-b'>us...</span> </p>
        <div className='GalleryCustomContainer '> 
            <Gallery  backdropClosesModal={true} images={IMAGES} showLightboxThumbnails={true}/>
            <HomeTourCarouselEng/>
        </div>
      </div>
    )
}


export{GalleryCustom, GalleryCustomEng}