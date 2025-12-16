import { Link } from "react-router-dom"
import "./button.css"


const CustomButton = ({ whereTo, title }) => {

    return <div className="button">
        <Link style={{ textDecoration: "none" }} to={whereTo} title={title}>
            <p>{title}</p>
        </Link>
    </div>


}

export default CustomButton 