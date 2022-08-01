import "../css/Testimonials.css";
import iconRate from "../../Icons/rating4.png"
import iconAvatar1 from "../../Icons/testimonials-avatars/default-avatar-2020-1.jpg"


function Testimonials() {
    return(
        <div className="TestimonialsMainContainer">
           

            <div  className=" justify-center testimonial-show-js RS-hidden ">  
                <section id="testimonials">
                {/* <!--heading---> */}
                
                {/* <!--testimonials-box-container------> */}
                <div className=" testimonial-box-container ">
                    {/* <!--BOX-1--------------> */}
                    <div className="border-rounded-g10 testimonial-box shadow-1">
                        {/* <!--top-------------------------> */}
                        <div className="box-top ">
                            {/* <!--profile-----> */}
                            <div className="profile">
                                {/* <!--img----> */}
                                <div className="profile-img">
                                    <img src={iconAvatar1} alt="avatar"/>
                                </div>
                                {/* <!--name-and-username--> */}
                                <div className="name-user">
                                    <strong>Elisabeth</strong>
                                    <span>@ElisabethvanBerckel</span>
                                </div>
                            </div>
                            {/* <!--reviews------> */}
                           
                        </div>
                        <div className="reviews">
                                <img src={iconRate} alt="adfdas"/>
                        </div>
                        {/* <!--Comments----------------------------------------> */}
                        <div className="client-comment">
                            <p>¡Pasamos un tiempo increíble en las montañas con nuestro guía Janier de Nevado Trek! Nos llevaron por los senderos más bellos del parque nacional y hasta la cumbre del Nevado Tolima. La subida al Nevado Tolima es realmente extenuante y difícil, pero gracias a nuestro guía logramos llegar a la cima y experimentar la fascinante salida del sol allí arriba.
                                ¡Realmente recomendamos volver a reservar un recorrido con Nevado Trek!.</p>
                        </div>
                    </div>




                    <div className="border-rounded-g10 testimonial-box shadow-1">
                        {/* <!--top-------------------------> */}
                        <div className="box-top ">
                            {/* <!--profile-----> */}
                            <div className="profile">
                                {/* <!--img----> */}
                                <div className="profile-img">
                                    <img src={iconAvatar1} alt="avatar"/>
                                </div>
                                {/* <!--name-and-username--> */}
                                <div className="name-user">
                                    <strong>ashack3187</strong>
                                    <span>@ashack3187</span>
                                </div>
                            </div>
                            {/* <!--reviews------> */}
                           
                        </div>
                        <div className="reviews">
                                <img src={iconRate} alt="adfdas"/>
                        </div>
                        {/* <!--Comments----------------------------------------> */}
                        <div className="client-comment">
                        <p>Pasé un tiempo maravilloso haciendo la caminata de 4 días hasta la cumbre del Nevado del Tolima. Todas las granjas en las que me alojé eran hermosas y la gente amable. El clima no era ideal el día de la cumbre, pero tuve una excelente guía, Janier, y llegamos a la cima.….</p>

                        </div>
                    </div>
                   
                    <div className="border-rounded-g10 testimonial-box shadow-1">
                        {/* <!--top-------------------------> */}
                        <div className="box-top ">
                            {/* <!--profile-----> */}
                            <div className="profile">
                                {/* <!--img----> */}
                                <div className="profile-img">
                                    <img src={iconAvatar1} alt="avatar"/>
                                </div>
                                {/* <!--name-and-username--> */}
                                <div className="name-user">
                                    <strong>Karisa Fenty</strong>
                                    <span>@KarisaFenty</span>
                                </div>
                            </div>
                            {/* <!--reviews------> */}
                           
                        </div>
                        <div className="reviews">
                                <img src={iconRate} alt="adfdas"/>
                        </div>
                        {/* <!--Comments----------------------------------------> */}
                        <div className="client-comment">
                        <p>Qué increíble aventura. Janier y todos los que ayudaron a organizar esto fueron increíbles. Nunca olvidaremos este viaje. Janier fue paciente y amable conmigo cuando estaba aterrorizada de llegar a la cima. Y me ayudó a bajar porque estaba tan asustada jajaja. Absolutamente increíble que recomiendo 100%!</p>

                        </div>
                    </div>
                   
                    {/* <!--BOX-3--------------> */}
                   
                    
                </div>
                </section>


            </div>

        </div>

    )
}


export {Testimonials};