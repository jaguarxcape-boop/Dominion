import "../../css/header.css"
import fb from "/icons/fb.png"
import tiktok from "/icons/tiktok.png"
import whatsapp from "/icons/whatsapp.png"
import { Link } from "react-router-dom"

const PageLinksToDisplay = () => {
    return <>
        <ul>
            <li>
                <Link to={"/"}>   Home  </Link></li>
            <li>
                <Link to={"about"}>
                    About  </Link></li>
            <li>
                <Link to={"ourstaff"}>
                    Staff  </Link></li>
        </ul>
    </>
}
const Header = () => {


    return (<header>
        <div id="div1header">
            <p>Call +233591579411</p>
            <a href="">
                <img src={fb} alt="facebook" />
            </a>
            <a href="">
                <img src={tiktok} alt="tiktok" />
            </a>
            <a href="">
                <img src={whatsapp} />
            </a>
        </div>
        <div id="div2header">
            <PageLinksToDisplay />

        </div>
    </header>)

}

export default Header