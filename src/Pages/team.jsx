import { staff } from "../json/allData.json"
import "../css/staff.css"
import { useEffect, useState } from "react"
import StaffWrapper from "../Components/staffWrapper"

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


  return <>
    <StaffWrapper hasHeader={"Meet The Team"} details={staff.allStaff} updateActiveStaff={updateActiveStaff}>

      {/* <Comp state={state} /> */}
    </StaffWrapper>
  </>
}

// const TwoSidedComponentsData = ()=> staff.admnistration.map((key)=> <div></div>)
const OurTeam = () => {

  return <>


    <StaffData />
  </>
}

export default OurTeam