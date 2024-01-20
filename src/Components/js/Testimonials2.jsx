import "../css/Testimonials2.css";
import "../css/RootStyles.css";

import iconRate from "../../Icons/rating4.png"
import iconAvatar1 from "../../Icons/testimonials-avatars/default-avatar-2020-1.jpg";
import iconAvatar2 from "../../Icons/testimonials-avatars/default-avatar-2020-65.jpg";
import iconAvatar3 from "../../Icons/testimonials-avatars/default-avatar-2020-42.jpg";
import {Carousel} from "react-responsive-carousel";


function Testimonials2() {
    return (
        <div className="Testimonials2-main-container font-14 lg-font-16">


            <figure class="snip1157 border-rounded-g10 flex-column ">

                <div className="snip-filter"></div>
                <blockquote className="text-center">Pasé un tiempo maravilloso haciendo la caminata de 4 días hasta la cumbre del Nevado del Tolima. Todas las granjas en las que me alojé eran hermosas y la gente amable. El clima era ideal el día de la cumbre,  tuve una excelente guía, Janier, y llegamos a la cima.
                    <div class="arrow"></div>

                </blockquote>

                <div className="flex-row testimonialImgContainer">
                    <img src={iconAvatar2}
                        alt="sq-sample3"/>
                    <div class="author">

                        <h5>@ashack3187

                        </h5>
                        <img alt="testimonial" className="Figure-rating-img"
                            src={iconRate}/>

                    </div>

                </div>

            </figure>
            <figure class="snip1157 border-rounded-g10 flex-column ">

                <div className="snip-filter"></div>
                <blockquote className="text-center">Qué increíble aventura. Janier y todos los que ayudaron a organizar esto fueron increíbles. Nunca olvidaremos este viaje. Janier fue paciente y amable conmigo cuando estaba aterrorizada de llegar a la cima. Y me ayudó a bajar porque estaba tan asustada jajaja. Absolutamente increíble que recomiendo 100%!
                    <div class="arrow"></div>

                </blockquote>

                <div className="flex-row testimonialImgContainer">
                    <img src={iconAvatar3}
                        alt="sq-sample3"/>
                    <div class="author">

                        <h5>@KarisaFenty

                        </h5>
                        <img alt="testimonial" className="Figure-rating-img"
                            src={iconRate}/>

                    </div>

                </div>

            </figure>
            <figure class="snip1157 border-rounded-g10 flex-column ">

                <div className="snip-filter"></div>
                <blockquote className="text-center">¡Pasamos un tiempo increíble en las montañas con nuestro guía Janier de Nevado Trek! Nos llevaron por los senderos más bellos del parque nacional y hasta la cumbre del Nevado Tolima. La subida al Nevado Tolima es realmente extenuante y difícil, pero gracias a nuestro guía logramos llegar a la cima y experimentar la fascinante salida del sol allí arriba.
                                ¡Realmente recomendamos volver a reservar un recorrido con Nevado Trek!.
                    <div class="arrow"></div>

                </blockquote>

                <div className="flex-row testimonialImgContainer">
                    <img src={iconAvatar1}
                        alt="sq-sample3"/>
                    <div class="author">

                        <h5>@EliVanBerckel

                        </h5>
                        <img alt="testimonial" className="Figure-rating-img"
                            src={iconRate}/>

                    </div>

                </div>

            </figure>
        </div>


    )
}


export {
    Testimonials2
}
