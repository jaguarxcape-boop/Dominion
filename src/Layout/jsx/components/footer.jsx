import logo from "/images/cropped_circle_image.webp"
import fb from "/icons/fb.png"
import tiktok from "/icons/tiktok.png"
import whatsapp from "/icons/whatsapp.png"
import "../../css/footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (<footer>
        <section id="topFooter">
            <div>
                <p>
                    <img style={{ "height": "100px" }} src={logo} alt='logo' />
                </p>
                <ul>
                    <li>
                        Roman Area Suhum
                    </li>
                    <li>
                        +233591579411
                    </li>
                    <li>
                        advanceddominion@gmail.com
                    </li>
                </ul>
            </div>

            <div>
                <p>
                    Quick Links
                </p>
                <ul>
                    <li>   <Link to={"ourstaff"}>
                        Staff  </Link></li>
                    <li>
                        <Link to={"about"}>
                            About Us  </Link>
                    </li>

                    <li>
                        <Link to='contact'>
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>

            {/* <div>
                <p>LINKS
                </p>
                <ul>
                    <li>
                        Courses
                    </li>
                    <li>
                        Events
                    </li>
                    <li>
                        Gallery

                    </li>
                    <li>
                        FAQs
                    </li>
                </ul>
            </div> */}

            {/* <div>
                <p>
                    SUPPORT
                </p>
                <ul>
                    <li>
                        Forums
                    </li>
                    <li>
                        Documentation
                    </li>
                    <li>
                        Language

                    </li>
                    <li>
                        Release Status
                    </li>
                </ul>
            </div> */}
        </section>

        <br />
        <section id="bottomFooter">
            <p>
                Copyright &copy; 2025
                Powered by HackingTechHome. <br />
                All Rights Reserved
            </p>
            <ul>
                <li>
                    <img src={fb} alt="facebook" />
                </li>
                <li>
                    <img src={tiktok} alt="tiktok" />
                </li>
                <li>
                    <img src={whatsapp} />

                </li>

            </ul>
        </section>
    </footer >
    )

}

export default Footer