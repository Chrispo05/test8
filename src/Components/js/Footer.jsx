
import "../css/Footer.css";
import "../css/RootStyles.css"

import iconWhatsapp from "../../Icons/whatsapp.png"
import iconInstagram from "../../Icons/instagram.png"
import iconFacebook from "../../Icons/facebook.png"

function Footer() {
    return(
		<div className="flex-row">
			<div className="RMD-hide"> 
				<link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
					<a href="https://wa.me/message/2IVZNZSIXXZYC1" className="float flex justify-center items-center" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-whatsapp my-float"></i>
					</a>
			</div>
			<div className="RMD-hide"> 
				<link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
					<a href="https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y=" className="float2 flex justify-center items-center" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-instagram my-float"></i>
					</a>
			</div>
			<div className="RMD-hide"> 
				<link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
					<a href="tel:+573042085501" className="float3 flex justify-center items-center" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-phone my-float"></i>
					</a>
			</div>

			<footer className="footer-distributed  ">

				<div className="footer-left">

					<h3>Nevado Trek</h3>

					<p className="footer-links font-400">
						<p>Salento, Quindío </p>
						<a href="tel:573042085501" className="font-600">+57 3042085501</a>
						<p>nevadotrek.info@gmail.com</p>
					
					</p>

		
				</div>

				<div className="footer-center">

					<div>
						
						<p className="font-20"  >Horario</p>
					</div>

					<div>
						
						<p className="font-400">Lunes - Domingo</p>
					</div>

					<div>
						
						<p className="font-400">10 a.m - 6 p.m</p>
					</div>

				</div>

				<div className="footer-right">

	

					<div className="footer-icons">
						<p className="color-a font-600 font-18">Síguenos</p>
						<a href="https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y=" target={"_blank"} rel="noopener noreferrer"><img src={iconInstagram} alt="iconoInstagram"/></a>
						<a href="https://wa.me/message/2IVZNZSIXXZYC1" target={"_blank"}   rel="noopener noreferrer"><img src={iconWhatsapp} alt="iconoInstagram"/></a>
						<a href="https://www.facebook.com/Nevado-Trek-111640871536730" target={"_blank"} rel="noopener noreferrer"><img src={iconFacebook} alt="iconoInstagram"/></a>
						
					

					</div>

				</div>

			</footer>	
		</div>
	)
}
function FooterEng() {
    return(
		<div className="flex-row">
			<div className="RMD-hide"> 
				<link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
					<a href="https://wa.me/message/2IVZNZSIXXZYC1" className="float flex justify-center items-center" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-whatsapp my-float"></i>
					</a>
			</div>
			<div className="RMD-hide"> 
				<link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
					<a href="https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y=" className="float2 flex justify-center items-center" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-instagram my-float"></i>
					</a>
			</div>
			<div className="RMD-hide"> 
				<link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
					<a href="tel:+573042085501" className="float3 flex justify-center items-center" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-phone my-float"></i>
					</a>
			</div>

			
			<footer class="footer-distributed  ">

				<div class="footer-left">

					<h3>Nevado Trek</h3>

					<p class="footer-links font-400">
						<p>Salento, Quindío </p>
						<a href="tel:573042085501" className="font-600">+57 3042085501</a>
						<p>nevadotrek.info@gmail.com</p>
					
					</p>

		
				</div>

				<div className="footer-center">

					<div>
						
						<p className="font-20"  >Schedule</p>
					</div>

					<div>
						
						<p className="font-400">Lunes - Domingo</p>
					</div>

					<div>
						
						<p className="font-400">10 a.m - 6 p.m</p>
					</div>

				</div>

				<div className="footer-right">

	

					<div class="footer-icons">
						<p className="color-a font-600 font-18">Follow us!</p>
						<a href="https://instagram.com/nevadotrek?igshid=YmMyMTA2M2Y=" target={"_blank"} rel="noopener noreferrer"><img src={iconInstagram} alt="iconoInstagram"/></a>
						<a href="https://wa.me/message/2IVZNZSIXXZYC1" target={"_blank"}   rel="noopener noreferrer"><img src={iconWhatsapp} alt="iconoInstagram"/></a>
						<a href="https://www.facebook.com/Nevado-Trek-111640871536730" target={"_blank"} rel="noopener noreferrer"><img src={iconFacebook} alt="iconoInstagram"/></a>
						
					

					</div>

				</div>

			</footer>	
		</div>
	)
}

export {Footer, FooterEng};