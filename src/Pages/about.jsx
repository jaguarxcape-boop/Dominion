
import data, { staff } from '../json/allData.json'
import "../css/aboutPage.css"
import { useEffect } from "react"
import { animateScroll } from "../js/animateScroll"
import StaffWrapper from "../Components/staffWrapper"


const styles = {
    staffWrapper: {
        background: "none",

    },

    buttonStyles: {
        top: "35%"
    }
}


const AboutPage = () => {
    useEffect(() => animateScroll, []);

    return <div className="aboutIntroContainer">
        <StaffWrapper hasHeader={"Our Facilities"} className={['animate-on-scroll']} details={staff.allStaff} /> <br /> <br />
  <div className="aboutIntro animate-on-scroll">
            <h1>School's History</h1>

            <p>{data.history}
            </p>
        </div>

        <div className="aboutIntro missionandvission animate-on-scroll">
            <h1>Our Mission</h1>

            <p>{data.mission.statement}
            </p>
        </div>

        <div className="aboutIntro missionandvission animate-on-scroll">
            <h1>Our Vision</h1>
            <p>{data.visionStatement}
            </p>
        </div>  

          <div className="aboutIntro  animate-on-scroll">
            <h1>Meet Our Hardworking Team</h1>

            <div style={{ position: "relative", margin: "auto" }}>
                <StaffWrapper style={styles} details={staff.allStaff} />

            </div>
        </div>  


    </div>
}

export default AboutPage