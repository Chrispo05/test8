
import timeLogo from "../../Icons/duration.png"
import {ButtonCustom} from "./ButtonCustom.jsx"
import "../css/Tours.css"
import "../css/RootStyles.css"






function Card(props) {
    return(
        <a href={`/tour?id=${props.tourInfo.tourID}`} className="textDecorationNone TourCardContainer color-a shadow-1 hover-scale-005 ">
                    <div className="ToursCardsTimeContainer">
                        <img src={timeLogo} alt="salento" />
                        <p className="ToursCardTimeP" >{props.tourInfo.timeShortESP}</p>
                    </div>   
                    <div>
                        <img className="TousCardsImg" src={props.tourInfo.img1} alt="nevadoSalento" />
                    </div>   
                    <div className="flex-column">
                        <div className="flex-column width-80">
                            <h3 className="hover-scale-005" > {props.tourInfo.nameESP}  </h3>
                            <p className="hover-scale-005 TourCardP color-b font-600">{props.tourInfo.priceCOP} </p>
                            <p className="hover-scale-005 TourCardP">{props.tourInfo.shortDescriptionESP} </p>
                            <ButtonCustom href={`/tour?id=${props.tourInfo.tourID}`} message="Ver más..." />

                        </div>   


                    </div>
                </a>

    )
}
function CardEng(props) {
    return(
        <a href={`/tourEng?id=${props.tourInfo.tourID}`} className="textDecorationNone TourCardContainer color-a shadow-1 hover-scale-005 ">
                    <div className="ToursCardsTimeContainer">
                        <img src={timeLogo} alt="salento" />
                        <p className="ToursCardTimeP" >{props.tourInfo.timeShortENG}</p>
                    </div>   
                    <div>
                        <img className="TousCardsImg" src={props.tourInfo.img1} alt="nevadoSalento" />
                    </div>   
                    <div className="flex-column">
                        <div className="flex-column width-80">
                            <h3 className="hover-scale-005" > {props.tourInfo.nameENG}  </h3>
                            <p className="hover-scale-005 TourCardP color-b font-600">{props.tourInfo.priceUSD} </p>
                            <p className="hover-scale-005 TourCardP">{props.tourInfo.shortDescriptionENG} </p>
                            <ButtonCustom href={`/tourEng?id=${props.tourInfo.tourID}`} message="see more..." />

                        </div>   


                    </div>
                </a>

    )
}






function ToursCards(props) {
    return(
        <div className="TourCardsMainContainer flex-row">
             <div className="TourCardsContainer "  >
                <Card tourInfo={props.tourInfo[0]} />
                <Card tourInfo={props.tourInfo[5]} />
                <Card tourInfo={props.tourInfo[4]} />
                <Card tourInfo={props.tourInfo[3]} />
                <Card tourInfo={props.tourInfo[2]} />
                <Card tourInfo={props.tourInfo[1]} />



            </div>

        </div>
    )
}
function ToursCardsEng(props) {
    return(
        <div className="TourCardsMainContainer flex-row">
             <div className="TourCardsContainer "  >
                <CardEng tourInfo={props.tourInfo[0]} />
                <CardEng tourInfo={props.tourInfo[5]} />
                <CardEng tourInfo={props.tourInfo[4]} />
                <CardEng tourInfo={props.tourInfo[3]} />
                <CardEng tourInfo={props.tourInfo[2]} />
                <CardEng tourInfo={props.tourInfo[1]} />



            </div>

        </div>
    )
}


export {ToursCards, ToursCardsEng};