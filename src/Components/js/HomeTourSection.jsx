import React from 'react';
import {ButtonCustom} from "../js/ButtonCustom.jsx"

import "../css/HomeTourSection.css";
import "../css/RootStyles.css";

function HomeTourSection1(props) {
    return(
        <div className='flex-row color-a'>
           <a href={props.href} className={`shadow-1 hover-scale-005 textDecorationNone HomeTourSectionCardMainContainer ${props.reverse} `} >

            <div className='HomeTourSectionCardImgContainer    '>
                    <img className='hover-scale-01 HomeTourSectionCardImg'  src={props.tourInfo.img1} alt="icondown"/>
                    <img className='hover-scale-01 HomeTourSectionCardImg' src={props.tourInfo.img2} alt="icondown"/>
                    <img className='hover-scale-01 HomeTourSectionCardImg'  src={props.tourInfo.img3} alt="icondown"/>
                    <img className='hover-scale-01 HomeTourSectionCardImg'  src={props.tourInfo.img4} alt="icondown"/>

                </div>
                <div className='HomeTourSectionTextContainer flex-column color-a'>
                    <h2 className='mt-0'>{props.tourInfo.nameESP}</h2>
                    <p className='mt-0 color-b font-600'>{props.tourInfo.priceCOP}</p>
                    <p className='mt-0 font-600'>{props.tourInfo.timeESP}</p>
                    <ButtonCustom href={props.href} message="Ver más..." />


                </div>
           </a>

        </div>
    )
}

function HomeTourSection1Eng(props) {
    return(
        <div className='flex-row color-a'>
           <a href={props.href} className={`shadow-1 hover-scale-005 textDecorationNone HomeTourSectionCardMainContainer ${props.reverse} `} >

            <div className='HomeTourSectionCardImgContainer    '>
                    <img className='hover-scale-01 HomeTourSectionCardImg'  src={props.tourInfo.img1} alt="icondown"/>
                    <img className='hover-scale-01 HomeTourSectionCardImg' src={props.tourInfo.img2} alt="icondown"/>
                    <img className='hover-scale-01 HomeTourSectionCardImg'  src={props.tourInfo.img3} alt="icondown"/>
                    <img className='hover-scale-01 HomeTourSectionCardImg'  src={props.tourInfo.img4} alt="icondown"/>

                </div>
                <div className='HomeTourSectionTextContainer flex-column color-a'>
                    <h2 className='mt-0'>{props.tourInfo.nameENG}</h2>
                    <p className='mt-0 color-b font-600'>{props.tourInfo.priceUSD}</p>
                    <p className='mt-0 font-600'>{props.tourInfo.timeENG}</p>
                    <ButtonCustom href={props.href} message="See more..." />


                </div>
           </a>

        </div>
    )
}




export {HomeTourSection1, HomeTourSection1Eng}