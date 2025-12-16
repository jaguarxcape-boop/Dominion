
import "./twosidedComponent.css"
const TwoSidedComponents = ({ header, information, img }) => {

    return <div className="twoSidedContainer">

        <section>
            <h1>{header}</h1>
            <p>
                {information}
            </p>
        </section>

        <section>
            <img src={img} alt="" />
        </section>
    </div>
}

export default TwoSidedComponents