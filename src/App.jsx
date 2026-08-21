import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from "./components/About"
import Categories from "./components/Categories";
import Popular from './components/Popular';
import Footer from './components/Footer';
import Main from "./layouts/Container";

function App() {

    return (
        <>
            <Navbar />
            <Main>
                <Hero />
                <About />
                <Categories />
                <Popular />
            </Main>
            <Footer />
        </>
    )
}

export default App
