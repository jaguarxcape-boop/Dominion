import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/jsx/layout";
import Homepage from "./Pages/homepage";
import AboutPage from "./Pages/about";
import OurTeam from "./Pages/team";

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
           <Route path="/about" element={<AboutPage />} />
         <Route path="/ourstaff" element={<OurTeam />} />
        </Route>

        {/* <Route path="*" element={<Homepage />} /> */}


      </Routes>
    </HashRouter>

  );
};

export default App;
