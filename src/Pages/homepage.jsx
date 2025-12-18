import "../css/homepage.css"
import CustomButton from "../Components/DesignComponents/button"
import { latestNews, message } from "../json/homepage.json"

import { staff } from "../json/allData.json"
import { useEffect } from "react"
import { animateScroll } from "../js/animateScroll"
import StaffWrapper from "../Components/staffWrapper"

const style = {
  "staffWrapper": {
    "width": "inherit",
    "marginLeft": "10px"
  },
  "buttonStyles": {
    "top": "38%"
  }
}


const Homepage = () => {
  useEffect(() => animateScroll, [])

  return <div id='homepage'>
    <section id="welcomeResponsive" className="container-responsive" style={style}>

      <div className="animate-on-scroll ">
        <h1>Welcome to Advanced Dominion Academy</h1>
        <h4>Here, we go beyond excellence</h4>
        <CustomButton title={"Connect With Us"} whereTo={"contact"} />
      </div>

      <div >
        <img className="animate-on-scroll " src={message.img} alt={``} />

        <h1 className="animate-on-scroll ">A warm message from our Director</h1>
        <p className="animate-on-scroll ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo optio nam vitae rem hic cum dolorum distinctio, vel quisquam magnam fugit sed quaerat nulla necessitatibus magni doloremque tenetur officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla expedita mollitia! Illum, omnis perspiciatis saepe neque dicta quisquam dolores, ratione
        </p>
      </div>

    </section>

    <h1 style={{ marginLeft: "20px" }}>Latest News</h1>
    <section className="container-responsive"
      style={{ "gridGap": "40px", backgroundColor: "white", backgroundImage: "none", color: "black" }}
    >

      <div style={{ position: "relative" }} className="
      homepagewrappercontainer-responsive
      ">
        {/* animate-on-scroll */}
        <StaffWrapper details={staff.allStaff} style={style} />
      </div>

      <div className="animate-on-scroll">
        <h1>{latestNews.headline}</h1>
        <p>{latestNews.news}</p>
      </div>
    </section>
  </div>
}

export default Homepage