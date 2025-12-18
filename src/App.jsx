import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/jsx/layout";
import Homepage from "./Pages/homepage";
import AboutPage from "./Pages/about";
import OurTeam from "./Pages/team";
import Gallery from "./Pages/gallery";
import Carousel from "./Components/DesignComponents/carousel";
import Admission from "./Pages/admission";

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="ourstaff" element={<OurTeam />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path="admission" element={<Admission />} />
        </Route>

        {/* <Route path="*" element={<Homepage />} /> */}


      </Routes>
    </HashRouter>

  );
};

export default App;
