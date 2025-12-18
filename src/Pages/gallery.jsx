import { useEffect, useState } from "react";
import Carousel from "../Components/DesignComponents/carousel";
import { facilities } from "../json/gallery.json"
const preFix = "image (";
const counter = 0;
const suffix = ')'
const imagePath = "images/career";

function generateImages({ totalCount }) {

    const images = [];
    let fileNum = counter;

    for (let i = 0; i < totalCount; i++) {
        fileNum += 1;
        images.push({
            image: `${imagePath}/${preFix}${fileNum}${suffix}.webp`,
        });
    }

    return images;
}

const Gallery = () => {

    return <>
        <h1>School Facilities </h1>

        <Carousel orientiation={"landscape"} images={facilities} />

        <h1>Career Day Images</h1>
        <Carousel orientiation={"landscape"} images={generateImages({ totalCount: 50 })} />

    </>;
};

export default Gallery;
