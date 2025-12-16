import Header from "./components/header"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"
import Hero from "./components/Hero"
const Layout = () => {
    return <>
        <Header />
        <Hero />
        {<Outlet />}

        <Footer />
    </>
}

export default Layout