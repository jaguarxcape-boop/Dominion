import "../../css/header.css"
import fb from "/icons/fb.png"
import tiktok from "/icons/tiktok.png"
import whatsapp from "/icons/whatsapp.png"
import { Link } from "react-router-dom"
import { useState } from "react"
const PageLinksToDisplay = () => {
    const [currentPage, setCurrentpage] = useState("")


    const Links = [
        { to: "/", name: "Home" },
        { to: "about", name: "About" },
        { to: "ourstaff", name: "Ourstaff" },
        { to: "gallery", name: "Gallery" },
        { to: "admission", name: "Admission" }
    ]



    return <>
        <ul>
            {Links.map((link, index) =>
                <li onClick={() => setCurrentpage(link.to)} key={index} className={link.to === currentPage ? "activeLink" : ""}>


                    <Link to={link.to}>   {link.name}  </Link></li>

            )}

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