import "./carousel.css";
import { useEffect, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

/* =========================
   Carousel Logic
   ========================= */
function initCarousel(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".carousel-slide");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let index = 0;
  const total = slides.length;

  if (!track || !total) return;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    index = (index + 1) % total;
    update();
  }

  function prev() {
    index = (index - 1 + total) % total;
    update();
  }

  nextBtn?.addEventListener("click", next);
  prevBtn?.addEventListener("click", prev);

  update();
}

/* =========================
   Carousel Component
   ========================= */
const Carousel = ({ orientation = "landscape", images = [] }) => {

  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current || images.length === 0) return;
    initCarousel(carouselRef.current);
  }, [images]);

  if (!images.length) {
    return <h2 style={{ color: "white" }}>No images available</h2>;
  }


 
  return (
    <div
      ref={carouselRef}

      className={`carousel ${orientation === "portrait" ? "carousel-height" : ""
        }`}
    >
      <div className="carousel-track">
        {images.map((item, index) => (
          <div className="carousel-slide" key={index}>
            <img src={item.image} alt="" loading="lazy" decoding="async" />
            {item.description && (
              <div className="carousel-text">{item.description}</div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <MdArrowBackIos className="carousel-btn prev" />
      <MdArrowForwardIos className="carousel-btn next" />
    </div>
  );
};

export default Carousel;
