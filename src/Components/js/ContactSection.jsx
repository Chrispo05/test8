
import iconWhatsapp from "../../Icons/whatsapp.png"
import iconInstagram from "../../Icons/instagram.png"
import iconFacebook from "../../Icons/facebook.png"
import "../css/RootStyles.css";
import "../css/ContactSection.css"
import contactSectionImg from "../../Fotos/contactSection.jpg";




function ContactSection() {
    return(
        <div className="contactSectionMainContainer flex-row  ">

            <div className="contactSectionContainer  lg-font-18">

                <div  >
                    <div className="flex-column lg-mt-32  ">
                        <p className="mb-0 color-a width-80">La manera más facil de contactarnos es a través de <span className="font-600 ">Whatsapp</span> </p>
                        <div>
                            <a href="https://wa.me/message/2IVZNZSIXXZYC1" target={"_blank"}   rel="noopener noreferrer" className="flex-row textDecorationNone border-rounded-g10   color-b font-600 mt-10 ">
                                <img className="ml-6" src={iconWhatsapp} alt="iconWhatsapp" />
                                <p className="mr-6 ml-6"> +57 3042085501</p>

                            </a>
                        </div>
                    </div>
                
                    <div className="flex-column lg-mt-32  ">
                        <p className="mb-0 color-a width-80">También, puedes encontrarnos en  <span className="font-600 ">Instagram y Facebook.</span> </p>
                        <div className="flex-row mt-12">
                            <a href="https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y=" target={"_blank"} rel="noopener noreferrer" className="flex-row textDecorationNone color-b font-600 padding-04em border-rounded-g10">
                                <img src={iconInstagram} alt="iconWhatsapp" />
                                
                            </a>
                            <a  href="https://www.facebook.com/Nevado-Trek-111640871536730" target={"_blank"} rel="noopener noreferrer" className="flex-row textDecorationNone color-b font-600 padding-04em border-rounded-g10">
                                <img src={iconFacebook} alt="iconWhatsapp" />
                                
                            </a>
                        </div>
                
                    
                    </div>
                    <div className="flex-column lg-mt-32   ">
                        <p className="mb-0 color-a width-80">Si prefieres, puedes enviarnos un <span className="font-600 ">E-mail.</span> </p>
                        <div className="flex-row mt--8">
                        <p className="color-b font-600">nevadotrek.info@gmail.com</p>
                        
                        </div>
                
                    
                    </div>
                    <div className="flex-column lg-mt-32   ">
                        <p className="mb-0 color-a width-80">Finalmente, puedes <span className="font-600 ">LLamarnos al.</span> </p>
                        <div className="flex-row mt--8">
                        <p className="color-b font-600">+57 3042085501</p>
                        
                        </div>
                
                    
                    </div>


                    
                </div>


                <div  className="flex-row  contactSectionImgContainer">
                    <img className="ContactSectionimg" src={contactSectionImg} alt="senderismo"/>
                </div>
            </div>




        </div>
    )
}


function ContactSectionEng() {
    return(
        <div className="contactSectionMainContainer flex-row  ">

            <div className="contactSectionContainer  lg-font-18">

                <div  >
                    <div className="flex-column lg-mt-32  ">
                        <p className="mb-0 color-a width-80">The easiest way to contact us is via <span className="font-600 ">Whatsapp</span> </p>
                        <div>
                            <a href="https://wa.me/message/2IVZNZSIXXZYC1" target={"_blank"}   rel="noopener noreferrer" className="flex-row textDecorationNone border-rounded-g10   color-b font-600 mt-10 ">
                                <img className="ml-6" src={iconWhatsapp} alt="iconWhatsapp" />
                                <p className="mr-6 ml-6"> +57 3042085501</p>

                            </a>
                        </div>
                    </div>
                
                    <div className="flex-column lg-mt-32  ">
                        <p className="mb-0 color-a width-80">You can also visit our  <span className="font-600 ">Instagram and Facebook.</span> </p>
                        <div className="flex-row mt-12">
                            <a href="https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y=" target={"_blank"} rel="noopener noreferrer" className="flex-row textDecorationNone color-b font-600 padding-04em border-rounded-g10">
                                <img src={iconInstagram} alt="iconWhatsapp" />
                                
                            </a>
                            <a href="https://www.facebook.com/Nevado-Trek-111640871536730" target={"_blank"} rel="noopener noreferrer" className="flex-row textDecorationNone color-b font-600 padding-04em border-rounded-g10">
                                <img src={iconFacebook} alt="iconWhatsapp" />
                                
                            </a>
                        </div>
                
                    
                    </div>
                    <div className="flex-column lg-mt-32   ">
                        <p className="mb-0 color-a width-80">You could send us an  <span className="font-600 ">E-mail instead.</span> </p>
                        <div className="flex-row mt--8">
                        <p className="color-b font-600">nevadotrek.info@gmail.com</p>
                        
                        </div>
                
                    
                    </div>
                    <div className="flex-column lg-mt-32   ">
                        <p className="mb-0 color-a width-80">Finally, give us a <span className="font-600 ">call.</span> </p>
                        <div className="flex-row mt--8">
                        <p className="color-b font-600">+57 3042085501</p>
                        
                        </div>
                
                    
                    </div>


                    
                </div>


                <div  className="flex-row  contactSectionImgContainer">
                    <img className="ContactSectionimg" src={contactSectionImg} alt="senderismo"/>
                </div>
            </div>




        </div>
    )
}



export {ContactSection,ContactSectionEng};