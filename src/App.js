
import './App.css';
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header, { HeaderEng } from "./Components/js/Header.js";
import HomeHeroCarousel, { HomeHeroCarouselEng } from "./Components/js/HomeHeroCarousel.js";
import {HomeTourSection1, HomeTourSection1Eng} from "./Components/js/HomeTourSection.jsx";
import {tourNevado, tourParamillo, tourParamo,tourCarbonera,tourCocora,tourTapir} from "./Components/js/ToursInfo.jsx";
import {ToursCards, ToursCardsEng} from "./Components/js/Tours.jsx";
import {HomeTourCarousel, HomeTourCarouselEng} from "./Components/js/HomeTourCarousel.jsx";

import { GalleryCustom, GalleryCustomEng } from './Components/js/GalleryCustom';
import { Tour, TourEng } from './Components/js/TourPage';
import {Footer, FooterEng} from "./Components/js/Footer.jsx";
import { ContactSection, ContactSectionEng } from './Components/js/ContactSection';

const arrayToursInfo = [tourNevado, tourParamillo, tourParamo,tourCarbonera,tourCocora,tourTapir];












function App() {
  return (
    
 
      <Routes>
         <Route path='/' element={ <Home/>  }>   </Route>   
         <Route path='/HomeEng' element={ <HomeEng/>  }>   </Route>   
         <Route path='tours' element={ <Tours/>  }>    </Route>
         <Route path='/toursEng' element={ <ToursEng/>  }>    </Route>
         <Route path='/tour' element={ <TourSection/>  }>    </Route>
         <Route path='/tourEng' element={ <TourSectionEng/>  }>    </Route>
         <Route path='/gallery' element={ <Gallery/>  }>     </Route>
         <Route path='/galleryEng' element={ <GalleryEng/>  }>     </Route>
         <Route path='/contact' element={ <Contact/>  }>    </Route>
         <Route path='/contactEng' element={ <ContactEng/>  }>    </Route>
  
      </Routes>
      
    
    
  );
}


function Home() {
  return (
    <div>
      
      <Header/>
      <HomeHeroCarousel/>
      <HomeTourSection1 tourInfo={tourNevado} href="/tour?id=tourNevado" />
      <HomeTourSection1 tourInfo={tourParamillo}  href="/tour?id=tourParamillo" reverse="flex-row-reverse" />
      <HomeTourSection1 tourInfo={tourParamo}  href="/tour?id=tourParamo" />
      <HomeTourCarousel/>
      <Footer/>



    </div>
  )



}
function HomeEng(){
  return (
    <div>
      
    <HeaderEng/>
    <HomeHeroCarouselEng/>
    <HomeTourSection1Eng tourInfo={tourNevado} href="/tourEng?id=tourNevado" />
    <HomeTourSection1Eng tourInfo={tourParamillo}  href="/tourEng?id=tourParamillo" reverse="flex-row-reverse" />
    <HomeTourSection1Eng tourInfo={tourParamo}  href="/tourEng?id=tourParamo" />
    <HomeTourCarouselEng/>
    <FooterEng/>



  </div>
  )
}


function Tours() {
  return (
    <div>
      <Header/>
      <ToursCards tourInfo={arrayToursInfo} />
      <Footer/>
    </div>
  )
}
function ToursEng() {
  return (
    <div>
      <HeaderEng/>
      <ToursCardsEng tourInfo={arrayToursInfo} />
      <FooterEng/>
    </div>
  )
}

function Gallery() {
  return (
    <div>
      <Header/>
      {/* <GalleryPhotosSection toursArray={arrayToursInfo}/> */}
      <GalleryCustom/>
      <Footer/>
  </div>
  )
}
function GalleryEng() {
  return (
    <div>
      <HeaderEng/>
      {/* <GalleryPhotosSection toursArray={arrayToursInfo}/> */}
      <GalleryCustomEng/>
      <FooterEng/>
  </div>
  )
}

function TourSection() {
  return(
    <div>
     <Header/>
      <Tour/>
      <Footer/>
    </div>
  )
}
function TourSectionEng() {
  return(
    <div>
     <HeaderEng/>
      <TourEng/>
      <FooterEng/>
    </div>
  )
}

function Contact() {
  return(
    <div>
      <Header/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
function ContactEng() {
  return(
    <div>
      <HeaderEng/>
      <ContactSectionEng/>
      <FooterEng/>
    </div>
  )
}



export default App;
