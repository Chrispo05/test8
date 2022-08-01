


import React from 'react';






import "../css/GalleryPhotosSection.css";


import "../css/RootStyles.css";















function GalleryPhotosSection(props) {
    console.log(props.toursArray[0].img1);
  

    
    return(
        <div className="flex-column ">
            <div className="  ">
                <h3>Captura momentos <span className=" font-600">épicos</span> con nosotros!</h3>
            </div>

            <div className=" image-mosaic   ">
                
            
                <a className="card card-tall card-wide" href="/"  >
                    <img src={props.toursArray[1].img1}  alt="nevadoSalento" />
                    
                </a>
                
                <a className="card card-tall" href="/"  >
                    <img src={props.toursArray[1].img1}  alt="nevadoSalento" />
                </a>
                <a className="card " href="/"  >
                    <img src={props.toursArray[2].img1}  alt="nevadoSalento" />
                </a>
                <a className="card " href="/" >
                     <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card " href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card "  href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card  card-wide card-tall"  href="/" >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card card-tall" href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card "  href="/" >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card "  href="/" >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card " href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" /> 
                </a>
                <a className="card " href="/" >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card card-tall card-wide " href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card card-tall " href="/" >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card card-tall" href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
                <a className="card card-wide card-tall " href="/"  >
                    <img src={props.toursArray[0].img1}  alt="nevadoSalento" />
                </a>
            </div>


         
               
            


        </div>

    )
};


export{GalleryPhotosSection};