import "../../css/hero.css"
import logo from "/images/cropped_circle_image.webp"
import navIcon from "/icons/navIcon.png"
import { Link } from "react-router-dom"

const BannerLinksToShow = () => {

    // const scrollIntoView = (element) => {
    //     console.log(element)
    //     const ele = document.getElementById(element)
    //     if (ele) {
    //         ele.scrollIntoView({ behavior: "smooth" })
    //     }
    // }



    // if (currentLocation == "/about") {
    //     return <>
    //         <ul id="navList">

    //             <li> <Link to={"#history"} onClick={() => scrollIntoView("history")}>History</Link></li>
    //             <li> <Link to={"#mission"} onClick={() => scrollIntoView("mission")}>Mission</Link></li>
    //             <li> <Link to={"#values"} onClick={() => scrollIntoView("values")}>Values</Link></li>
    //             <li> <Link to={"#team"} onClick={() => scrollIntoView("team")}>Our Team</Link></li>
    //         </ul>
    //     </>
    // }
    return <ul id="navList">
        {/* <li> <Link to={"#introGreeting"} onClick={() => scrollIntoView("introGreeting")}>Welcome</Link></li>
        <li> <Link to={"#latestNews"} onClick={() => scrollIntoView("latestNews")}>Latest News</Link></li> */}
    </ul>
}
const Hero = () => {

    const toggleNav = () => {

        let navList = document.querySelector("#navList")
        if (navList.style.display.toString() != "block") {
            navList.style.display = "block"
        }
        else {
            navList.style.display = 'none'
        }
    }



    return <section id="banner">
        <div id="leftbanner">

            <img src={logo} alt="school logo" />

            <h1>Advanced Dominion Academy</h1>
        </div>
        <div id="rightbanner">
            <img id="navIcon" src={navIcon} onClick={() => toggleNav()} />

            <BannerLinksToShow />

        </div>
    </section>
}

export default Hero 