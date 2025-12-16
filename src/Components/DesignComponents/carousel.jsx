import img1 from "../../images/Webp/5Z9A8240.webp"
import img2 from "../../images/Webp/5Z9A8242.webp"
import img3 from "../../images/Webp/5Z9A8248.webp"
import "./carousel.css"

import { FcNext, FcPrevious } from "react-icons/fc"



const CarouselSoul = () => {
    const carouselInner = document.querySelector(".carouselInner");
    let currentIndex = 0;
    const images = document.querySelectorAll(".carouselInner img");

    const Next = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    const Prev = () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }


    return <>

        <div className="carousel">
            <div className="carouselInner">


                <img src={img1} alt="img1" />
                <img src={img2} alt="img1" />
                <img src={img3} alt="img1" />

            </div>
            <button onClick={Prev} className="prev-btn">
                <FcPrevious />
            </button>

            <button onClick={Next} className="next-btn">
                <FcNext />
            </button>
        </div>
    </>
}
const Carousel = () => {

    return <CarouselSoul />
}

export default Carousel