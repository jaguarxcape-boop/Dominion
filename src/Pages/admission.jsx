import { useEffect } from "react"
import "../css/admission.css"
import "../css/homepage.css"
import { animateScroll } from "../js/animateScroll"
import { FaDownload } from "react-icons/fa6"
const Admission = () => {

    useEffect(() => animateScroll())

    return <>

        <div className="container-responsive admission-body ">

            <aside>
                <h1 className="animate-on-scroll">Do you want to go beyond excellence ?</h1>
                <p className="animate-on-scroll" >Join Dominion Now</p>
            </aside>
            <aside >
                <h1 className="animate-on-scroll">Advanced Dominion Academy</h1>
                <p className="animate-on-scroll" style={{paddingRight:"10px"}}>

                    Advanced Dominion Academy is a nurturing learning community committed to providing high-quality education that develops academic excellence, strong character, and lifelong skills. We welcome learners from diverse backgrounds into a supportive and engaging environment where every child is encouraged to grow, discover their potential, and succeed.

                    Our school offers a transparent and parent-friendly admissions process, supported by a dedicated team ready to guide families from inquiry to enrollment. At Advanced Dominion Academy, we partner with parents to shape confident, responsible, and future-ready learners.
                </p>
            </aside>
        </div>


        <div className="container-responsive" style={{ background: "#005A00", display:"block", padding:"10px" }}>

            <aside>
                <h1>Admission Details</h1>

                <p><FaDownload /> <span>Download Form</span></p>
                <p><FaDownload /> <span>Download Brochure</span></p>
            </aside>

        </div>
<br />
    </>
}

export default Admission