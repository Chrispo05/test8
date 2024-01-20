import React, {useState} from 'react';
import mainLogo from '../../../src/Icons/mainLogo.svg';
import whatsappIcon from '../../../src/Icons/whatsapp.png';
import instagramIcon from '../../../src/Icons/instagram.png';
import facebookIcon from '../../../src/Icons/facebook.png';
import iconHome from "../../Icons/home.png";
import iconMenu from "../../Icons/menu.png";
import iconGallery from "../../Icons/gallery.png";
import iconPhone from "../../Icons/phone-call.png";
import "../css/Header.css";
import "../css/RootStyles.css";
import {scrollTop} from './Helpers';
import { useEffect } from 'react';


// logic for the language change
function handleLanguage(e) { // e.target.value === "eng"? window.location.href = `https://chrispo05.github.io/test8/#/homeeng`: window.location.href = `https://chrispo05.github.io/test8/#`;
    // e.target.value === "eng" ? window.location.href = `/#/homeeng` : window.location.href = `/home/#`;
    e.target.value === "eng" ? window.location.href = `https://chrispo05.github.io/test8/#/HomeEng` : window.location.href = `https://chrispo05.github.io/test8/#/`;


}


function Header(props = "") {
    
    
    // logica para saber cuando haccen scroll up o down
    let [headerStikyState, setHeaderStikySate] = useState()










    // script for the hamburguer change state, adding open class
    const [hamburguerButtonState, sethamburguerButtonState] = useState(false);


    function hamburguerButtonChangeState() {

        !hamburguerButtonState ? sethamburguerButtonState(true) : sethamburguerButtonState(false);


    }


    // estado para controlar que el header se oculte cuando estamos en tourPage
    const [HeaderHiddenTourPageState, setHeaderHiddenTourPageState] = useState(false);


    // logic for nav links to take top page
    function handleNavLinkclick() {
        scrollTop();
        hamburguerButtonChangeState();
    }


    return (

        <div className='flex-row'>

            <div className={
                ` headerMainContainer shadow-1 width-98 lg-width-90 border-rounded-g10 lg-space-around ${props.isNotFixed? "UnfixHeader" :""}
                }`
            }>
                <div className='headerTitleSectionMainContainer '>
                    <div>
                        <img className='headerLogoImg'
                            src={mainLogo}
                            alt="logoNevadoTrek"/>
                    </div>
                    <div>
                        <h1>
                            <a href='#/' className=' font-size24 headerTitleA padding-left02 textDecorationNone color-a'>Nevado Trek</a>
                        </h1>
                    </div>
                    <div className='padding-left1 '>
                        <select onChange={handleLanguage}
                            className='headerLanguageSelect'
                            name="language">

                            <option value={"eng"}>Eng</option>

                            <option value={"esp"}
                                selected>Esp</option>

                        </select>
                    </div>
                </div>

                <div className={
                    `flex-row  headerUlSectionMainContainer headerUlSectionMainContainerHide ${
                        hamburguerButtonState ? "headerUlSectionMainContainerShow" : ""
                    } md-headerUlSectionMainContainerShow `
                }>
                    <ul className='headerSectionsUl nav-links'>
                        <a href='#/'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconHome}
                                alt='iconHome'/>
                            <p className='textDecorationNone   color-a'>
                                Inicio
                            </p>
                        </a>
                        <a href='#/tours'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconMenu}
                                alt='iconHome'/>
                            <p className='textDecorationNone color-a'>
                                Tours
                            </p>
                        </a>
                        <a href='#/gallery/'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconGallery}
                                alt='iconHome'/><p className='textDecorationNone color-a'>
                                Galería
                            </p>
                        </a>
                        <a href='#/contact'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconPhone}
                                alt='iconHome'/><p className='textDecorationNone color-a'>
                                Contacto
                            </p>
                        </a>

                    </ul>
                </div>

                <div className='flex-row hidden  md-show  '>
                    <div className='flex-row '>

                        <a className='textDecorationNone hover-scale-02 flex-row ' rel="noopener noreferrer"
                            target={"_blank"}
                            href='https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y='>
                            <img className='headerInstagramIconImg'
                                src={instagramIcon}
                                alt="instaIcon"/>
                            <p className='md-hide'>Síguenos!</p>
                        </a>

                        <a className='textDecorationNone hover-scale-02 flex-row ' rel="noopener noreferrer"
                            target={"_blank"}
                            href='https://wa.me/message/2IVZNZSIXXZYC1'>
                            <img className='headerWhatsappIconImg'
                                src={whatsappIcon}
                                alt="whatsappIcon"/>
                            <p className='md-hide'>+57 3042085501</p>
                        </a>
                        <a className='hidden mdlg-show-flex headerFacebookIconContainer textDecorationNone hover-scale-02 flex-row  ' rel="noopener noreferrer"
                            target={"_blank"}
                            href='https://www.facebook.com/Nevado-Trek-111640871536730'>
                            <img className='headerFacebookIcon'
                                src={facebookIcon}
                                alt="whatsappIcon"/>
                            <p className='md-hide'>+57 3042085501</p>
                        </a>


                    </div>

                </div>

                <div className='hamburguerIconMainContainer flex-row'
                    onClick={hamburguerButtonChangeState}>

                    <div className={
                        `icon nav-icon-5 ${
                            hamburguerButtonState ? "open" : ""
                        } `
                    }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>


                </div>


            </div>

        </div>
    )
}


function HeaderEng(props) { // script for the hamburguer change state, adding open class
    const [hamburguerButtonState, sethamburguerButtonState] = useState(false);


    function hamburguerButtonChangeState() {


        !hamburguerButtonState ? sethamburguerButtonState(true) : sethamburguerButtonState(false);


    }


    // logic for nav links to take top page
    function handleNavLinkclick() {
        scrollTop();
        hamburguerButtonChangeState();
    }


    return (

        <div className='flex-row'>

            <div className={
                `headerMainContainer shadow-1 width-98 lg-width-90 lg-space-around ${
                    props.isNotFixed ? "UnfixHeader" : ""
                }`
            }>
                <div className='headerTitleSectionMainContainer '>
                    <div>
                        <img className='headerLogoImg'
                            src={mainLogo}
                            alt="logoNevadoTrek"/>
                    </div>
                    <div>
                        <h1>
                            <a href='#/HomeEng' className=' font-size24 headerTitleA padding-left02 textDecorationNone color-a'>Nevado Trek</a>
                        </h1>
                    </div>
                    <div className='padding-left1 '>
                        <select onChange={handleLanguage}
                            className='headerLanguageSelect '
                            name="language">

                            <option value={"eng"}
                                selected>Eng</option>

                            <option value={"esp"}>Esp</option>

                        </select>
                    </div>
                </div>

                <div className={
                    `flex-row  headerUlSectionMainContainer headerUlSectionMainContainerHide ${
                        hamburguerButtonState ? "headerUlSectionMainContainerShow" : ""
                    } md-headerUlSectionMainContainerShow `
                }>
                    <ul className='headerSectionsUl nav-links'>
                        <a href='#/HomeEng'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconHome}
                                alt='iconHome'/>
                            <p className='textDecorationNone   color-a'>
                                Home
                            </p>
                        </a>
                        <a href='#/toursEng'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconMenu}
                                alt='iconHome'/>
                            <p className='textDecorationNone color-a'>
                                Tours
                            </p>
                        </a>
                        <a href='#/galleryEng'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconGallery}
                                alt='iconHome'/><p className='textDecorationNone color-a'>
                                Gallery
                            </p>
                        </a>
                        <a href='#/contactEng'
                            onClick={handleNavLinkclick}
                            className='textDecorationNone flex-row'>
                            <img className='headeLinkIcon'
                                src={iconPhone}
                                alt='iconHome'/><p className='textDecorationNone color-a'>
                                Contact
                            </p>
                        </a>

                    </ul>
                </div>

                <div className='flex-row hidden  md-show  '>
                    <div className='flex-row '>

                        <a className='textDecorationNone hover-scale-02 flex-row '
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href='https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y='>
                            <img className='headerInstagramIconImg'
                                src={instagramIcon}
                                alt="instaIcon"/>
                            <p className='md-hide'>Follow us!</p>
                        </a>

                        <a className='textDecorationNone hover-scale-02 flex-row '
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href='https://wa.me/message/2IVZNZSIXXZYC1'>
                            <img className='headerWhatsappIconImg'
                                src={whatsappIcon}
                                alt="whatsappIcon"/>
                            <p className='md-hide'>+57 3042085501</p>
                        </a>
                        <a className='hidden mdlg-show-flex headerFacebookIconContainer textDecorationNone hover-scale-02 flex-row  '
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href='https://www.facebook.com/Nevado-Trek-111640871536730'>
                            <img className='headerFacebookIcon'
                                src={facebookIcon}
                                alt="whatsappIcon"/>
                            <p className='md-hide'>+57 3042085501</p>
                        </a>


                    </div>

                </div>

                <div className='hamburguerIconMainContainer flex-row'
                    onClick={hamburguerButtonChangeState}>

                    <div className={
                        `icon nav-icon-5 ${
                            hamburguerButtonState ? "open" : ""
                        } `
                    }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>


                </div>


            </div>

        </div>
    )
}


export default Header;
export {
    HeaderEng
}
