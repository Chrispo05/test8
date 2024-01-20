
import "../css/ButtonCustom.css"
import "../css/RootStyles.css"
import { scrollTop } from "./Helpers";

function ButtonCustom(props) {
    return (
        <a onClick={scrollTop}  name="top" href={props.href}> 
            <button className="ButtonCustomButton" type="button">
                {props.message}
            </button>
        </a>
    )
}

export {ButtonCustom};