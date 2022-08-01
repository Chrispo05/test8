
import "../css/ButtonCustom.css"
import "../css/RootStyles.css"

function ButtonCustom(props) {
    return (
        <a href={props.href}>
            <button className="ButtonCustomButton" type="button">
                {props.message}
            </button>
        </a>
    )
}

export {ButtonCustom};