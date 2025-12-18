import { useEffect, useRef, useState } from "react";
import { animateScroll } from "../js/animateScroll";
import PrevImage from "/icons/imagePrev.svg";
import NextImage from "/icons/imageNext.svg";

const StaffWrapper = ({
    details = [],
    hasHeader,
    className = "",
    updateActiveStaff,
    children,
    style,
}) => {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const total = details.length;

    useEffect(() => {
        animateScroll();
    }, []);

    useEffect(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }, [index]);

    const next = () => {
        setIndex((i) => (i + 1) % total);
    };

    const prev = () => {
        setIndex((i) => (i - 1 + total) % total);
    };

    if (!details.length) return null;

    return (
        <div className={`staffWrapper ${className}`} style={style?.staffWrapper}>
            {hasHeader && <h1>{hasHeader}</h1>}

            <section className="gridWrapper carousel-track" ref={trackRef}>
                {details.map((item, i) => (
                    <div
                        key={i}
                        className="imageDiv carousel-slide"
                        style={style?.imageDiv}
                        onClick={() => updateActiveStaff(item)}
                    >
                        <img src={item.img} alt="" />

                        <h2>{item.name}</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vitae soluta tenetur quasi, sed officiis quod voluptatum quia incidunt. Architecto officiis odio hic in neque, nemo consequuntur sit consequatur similique!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat voluptatum totam consequatur ut officia. Dolor dolorem ex explicabo adipisci aliquid distinctio, at pariatur quam quae eius deserunt? Esse, molestiae?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate reiciendis repellat assumenda, delectus officiis consequuntur accusamus voluptas impedit mollitia blanditiis. Beatae incidunt laudantium quaerat vel illum sunt iste sed.
                        </p> */}
                    </div>
                ))}
            </section>

            {/* Navigation buttons */}
            <img
                src={PrevImage}
                className="prev"
                onClick={prev}
                alt="Previous"
            />
            <img
                src={NextImage}
                className="next"
                onClick={next}
                alt="Next"
            />

            {children}
        </div>
    );
};

export default StaffWrapper;
