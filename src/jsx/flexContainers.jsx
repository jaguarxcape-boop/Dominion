import "../css/flexContainers.css"
import Card from "./card"
const arr = [1, 2, 4, 5, 6, 7, 8]
const HorizontalFlexWithButton = () => {

    const moveCarousel = () => {
        const elementToMove = document.querySelector(".horizontalFlexScroll > div:first-child")
        console.log(elementToMove.style)
    }
    return <div className="horizontalFlexWithButton">
        <div className="prev" onClick={moveCarousel}>
            <p> P </p>
        </div>
        <div className="next" onClick={moveCarousel}>
            <p> N </p>
        </div>
        <div className="horizontalFlexScroll">
            {arr.map((key) => <Card toggle={moveCarousel} key={key} />)
            }



        </div>

    </div>
}

export default HorizontalFlexWithButton