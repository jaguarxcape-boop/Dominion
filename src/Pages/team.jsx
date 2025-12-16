import { staff } from "../json/allData.json"
import "../css/staff.css"
import { useEffect, useState } from "react"
import TwoSidedComponents from "../Components/DesignComponents/twoSidedComponents"
import NextImage from "/icons/imageNext.svg"
import PrevImage from "/icons/imagePrev.svg"
export const StaffWrapper = ({ staffDetails, hasHeader, className, updateActiveStaff, children, style }) => {

  const nextMotion = (e) => {
    // const parentElement = e.target.parentElement
    // const carouselInner = parentElement.querySelector(".gridWrapper")
    // const images = parentElement.querySelectorAll(".imageDiv");
    // let currentIndex = 0;
    // currentIndex++;
    // if (currentIndex >= images.length) {
    //   currentIndex = 0;
    // }
    // carouselInner.style.transform = `translateX(-${currentIndex * 400}px)`;

  }

  const prevMotion = (e) => {
    // const parentElement = e.target.parentElement
    // const carouselInner = parentElement.querySelector(".gridWrapper")
    // const images = parentElement.querySelectorAll(".imageDiv");
    // let currentIndex = 0;
    // currentIndex++;
    // if (currentIndex >= images.length) {
    //   currentIndex = 0;
    // }
    // carouselInner.style.transform = `translateX(-${currentIndex * 400}px)`;

  }
  useEffect(() => {

    const carouselInner = document.getElementsByClassName("gridWrapper")[0];
    let currentIndex = 0;
    const images = document.getElementsByClassName("imageDiv")
    const prev = document.getElementsByClassName("prev")[0]
    const next = document.getElementsByClassName("next")[0]

    try {
      next.addEventListener("click", () => {

        currentIndex++;
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }


        carouselInner.style.transform = `translateX(-${currentIndex * 400}px)`;
      })


      prev.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = images.length - 1;
        }

        carouselInner.style.transform = `translateX(-${currentIndex * 400}px)`;

      })
    }
    catch {
      // 
    }
  })

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

  var id = 0;
  return <>
    <div className={`staffWrapper animate-on-scroll ${className}`} style={style && style.staffWrapper}>
      {String(hasHeader).trim() &&
        <h1 style={{ fontSize: "3em" }}>{hasHeader}</h1>
      }
      <section className="gridWrapper">
        {staffDetails.staff.allStaff.map((key =>
          <div className="imageDiv" style={style && style.imageDiv} key={id++} onClick={() => updateActiveStaff(key)}>
            <img
              src={key.img}
              alt=""
            />

            {/* <img src={`${key.img}`} alt={`${key.name}'s logo`} /> */}
            <h2>
              {key.name}
            </h2>
          </div>
        ))}
      </section>

      <img src={PrevImage} onClick={prevMotion} className="prev" style={style && style.buttonStyles} alt="" />
      <img src={NextImage} onClick={nextMotion} className="next" style={style && style.buttonStyles} alt="" />


      {children}
    </div >
  </>
}
const Comp = ({ state }) => {
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
  return <section>
    <div className="activeImageDetailsDiv">
      <section className="imgSection">
        <img className="animate-on-scroll" src={state.activeStaff.img} alt="Staff Image" />
        <aside className="imgTextAside">
          <h1 className="animate-on-scroll">
            {state.activeStaff.name}
          </h1>

          <h5 className="animate-on-scroll">{state.activeStaff.position}</h5>
        </aside>
      </section>

      <p className="animate-on-scroll">{state.activeStaff.information}</p>
    </div>
  </section>

}
const StaffData = () => {

  const [state, setDatastate] = useState({ staff, activeStaff: staff.allStaff[0] })

  const updateActiveStaff = (key) => {
    setDatastate({ ...staff, activeStaff: key })
  }


  return <div className="body">
    <StaffWrapper hasHeader={"Meet The Team"} staffDetails={{ staff }} updateActiveStaff={updateActiveStaff}>

      <Comp state={state} />
    </StaffWrapper>
  </div>
}

// const TwoSidedComponentsData = ()=> staff.admnistration.map((key)=> <div></div>)
const OurTeam = () => {

  return <>


    <StaffData />
  </>
}

export default OurTeam