import { StaffWrapper } from "./team"
import data from '../json/allData.json'
import "../css/aboutPage.css"
import { useEffect } from "react"


const styles = {
    staffWrapper: {
        background: "none",
  
    },

    buttonStyles: {
        top: "35%"
    }
}

const aboveIntroWrapperStyle = {
    staffWrapper: {
        // height: "600px"
    },
    buttonStyles: {
        top: "40%"
    }
}
const AboutPage = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return <div className="aboutIntroContainer">

        <StaffWrapper hasHeader={"Our Facilities"} className={['animate-on-scroll']} staffDetails={data} style={aboveIntroWrapperStyle} /> <br /> <br />
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

<div style={{position:"relative",margin:"auto"}}>
            <StaffWrapper style={styles} staffDetails={data} />

</div>
        </div>


    </div>
}

export default AboutPage