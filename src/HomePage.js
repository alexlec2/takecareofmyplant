import Navbar from './components/ofHomePage/navbar'
import Presentation from "./components/ofHomePage/presentation";
import About from "./components/ofHomePage/about";
import Contact from "./components/ofHomePage/contact";

function HomePage() {
    return (
        <>
            <Navbar />
            <Presentation />
            <About />
            <Contact />
        </>
    );
}

export default HomePage;