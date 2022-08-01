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







  //logic for the language change
  function handleLanguage(e) {
    e.target.value === "eng"? window.location.pathname = "/HomeEng": window.location.pathname = "/";

  
}






function Header() {

       //script for the hamburguer change state, adding open class
    const [hamburguerButtonState, sethamburguerButtonState] = useState(false);
    

    function hamburguerButtonChangeState() {

       
        !hamburguerButtonState? sethamburguerButtonState(true) : sethamburguerButtonState(false);

        
    }

  

    return (

        <div className='flex-row'> 
    
                <div className='headerMainContainer width-98 lg-width-90 lg-space-around'>
                    <div className='headerTitleSectionMainContainer '>
                        <div>
                            <img className='headerLogoImg' src={mainLogo} alt="logoNevadoTrek" /> 
                        </div>
                        <div>
                            <h1> <a href='/' className=' font-size24 headerTitleA padding-left02 textDecorationNone color-a'>Nevado Trek</a> </h1>
                        </div>
                        <div className='padding-left1 '>
                            <select onChange={handleLanguage} className='headerLanguageSelect rounded-sm' name="language">

                                <option value={"eng"}>Eng</option>

                                <option value={"esp"} selected>Esp</option>

                            </select>
                        </div>
                    </div>
                    
                    <div className={`flex-row  headerUlSectionMainContainer headerUlSectionMainContainerHide ${hamburguerButtonState? "headerUlSectionMainContainerShow" : ""} md-headerUlSectionMainContainerShow `}>
                        <ul className='headerSectionsUl nav-links'>
                            <li className='flex-row'> <img  className='headeLinkIcon' src={iconHome} alt='iconHome'/> <a  className='textDecorationNone   color-a' href='/'> Inicio </a>  </li>
                            <li className='flex-row'> <img className='headeLinkIcon'  src={iconMenu} alt='iconHome'/> <a  className='textDecorationNone color-a' href='/tours'> Tours </a>  </li>
                            <li className='flex-row'> <img className='headeLinkIcon'  src={iconGallery} alt='iconHome'/><a  className='textDecorationNone color-a' href='/gallery'> Galería </a>  </li>
                            <li className='flex-row'> <img  className='headeLinkIcon' src={iconPhone} alt='iconHome'/><a  className='textDecorationNone color-a' href='/contact'> Contacto </a>  </li>
        
                        </ul>
                    </div>

                    <div className='flex-row hidden  md-show  '>
                        <div className='flex-row '>
                            
                            <a className='textDecorationNone hover-scale-02 flex-row ' rel="noopener noreferrer" target={"_blank"} href='https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y='> 
                                <img className='headerInstagramIconImg' src={instagramIcon} alt="instaIcon" /> 
                                <p  className='md-hide' >Síguenos!</p>
                            </a>
                        
                            <a className='textDecorationNone hover-scale-02 flex-row ' rel="noopener noreferrer" target={"_blank"} href='https://wa.me/message/2IVZNZSIXXZYC1'> 
                                <img className='headerWhatsappIconImg' src={whatsappIcon} alt="whatsappIcon" /> 
                                <p className='md-hide'>+57 3042085501</p>
                            </a>
                            <a className='hidden mdlg-show-flex headerFacebookIconContainer textDecorationNone hover-scale-02 flex-row  ' rel="noopener noreferrer" target={"_blank"} href='https://www.facebook.com/Nevado-Trek-111640871536730'> 
                                <img className='headerFacebookIcon' src={facebookIcon} alt="whatsappIcon" /> 
                                <p className='md-hide'>+57 3042085501</p>
                            </a>
                        

                        </div>

                    </div>

                    <div className='hamburguerIconMainContainer flex-row' onClick={hamburguerButtonChangeState}>
                       
                        <div className={`icon nav-icon-5 ${hamburguerButtonState? "open" : ""} `}  >
                            <span></span>
                            <span></span>
                            <span></span>
                         </div>
                        


                    </div>



                </div>

        </div>
    )
}


function HeaderEng() {
         //script for the hamburguer change state, adding open class
         const [hamburguerButtonState, sethamburguerButtonState] = useState(false);
    

         function hamburguerButtonChangeState() {
     
            
             !hamburguerButtonState? sethamburguerButtonState(true) : sethamburguerButtonState(false);
     
             
         }
     
         return (
     
             <div className='flex-row'> 
         
                     <div className='headerMainContainer width-98 lg-width-90 lg-space-around'>
                         <div className='headerTitleSectionMainContainer '>
                             <div>
                                 <img className='headerLogoImg' src={mainLogo} alt="logoNevadoTrek" /> 
                             </div>
                             <div>
                                 <h1> <a href='/HomeEng' className=' font-size24 headerTitleA padding-left02 textDecorationNone color-a'>Nevado Trek</a> </h1>
                             </div>
                             <div className='padding-left1 '>
                                 <select onChange={handleLanguage}  className='headerLanguageSelect rounded-sm' name="language">
     
                                     <option value={"eng"} selected>Eng</option>
     
                                     <option value={"esp"} >Esp</option>
     
                                 </select>
                             </div>
                         </div>
                         
                         <div className={`flex-row  headerUlSectionMainContainer headerUlSectionMainContainerHide ${hamburguerButtonState? "headerUlSectionMainContainerShow" : ""} md-headerUlSectionMainContainerShow `}>
                             <ul className='headerSectionsUl nav-links'>
                                 <li className='flex-row'> <img  className='headeLinkIcon' src={iconHome} alt='iconHome'/> <a  className='textDecorationNone   color-a' href='/HomeEng'> Home </a>  </li>
                                 <li className='flex-row'> <img className='headeLinkIcon'  src={iconMenu} alt='iconHome'/> <a  className='textDecorationNone color-a' href='/toursEng'> Tours </a>  </li>
                                 <li className='flex-row'> <img className='headeLinkIcon'  src={iconGallery} alt='iconHome'/><a  className='textDecorationNone color-a' href='/galleryEng'> Gallery </a>  </li>
                                 <li className='flex-row'> <img  className='headeLinkIcon' src={iconPhone} alt='iconHome'/><a  className='textDecorationNone color-a' href='/contactEng'> Contact </a>  </li>
             
                             </ul>
                         </div>
     
                         <div className='flex-row hidden  md-show  '>
                             <div className='flex-row '>
                                 
                                 <a className='textDecorationNone hover-scale-02 flex-row ' target={"_blank"} rel="noopener noreferrer" href='https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y='> 
                                     <img className='headerInstagramIconImg' src={instagramIcon} alt="instaIcon" /> 
                                     <p  className='md-hide' >Follow us!</p>
                                 </a>
                             
                                 <a className='textDecorationNone hover-scale-02 flex-row ' target={"_blank"} rel="noopener noreferrer" href='https://wa.me/message/2IVZNZSIXXZYC1'> 
                                     <img className='headerWhatsappIconImg' src={whatsappIcon} alt="whatsappIcon" /> 
                                     <p className='md-hide'>+57 3042085501</p>
                                 </a>
                                 <a className='hidden mdlg-show-flex headerFacebookIconContainer textDecorationNone hover-scale-02 flex-row  ' target={"_blank"} rel="noopener noreferrer" href='https://www.facebook.com/Nevado-Trek-111640871536730'> 
                                     <img className='headerFacebookIcon' src={facebookIcon} alt="whatsappIcon" /> 
                                     <p className='md-hide'>+57 3042085501</p>
                                 </a>
                             
     
                             </div>
     
                         </div>
     
                         <div className='hamburguerIconMainContainer flex-row' onClick={hamburguerButtonChangeState}>
                            
                             <div className={`icon nav-icon-5 ${hamburguerButtonState? "open" : ""} `}  >
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
export{HeaderEng}