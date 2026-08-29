import Apps from "../layouts/Apps";
import Hero from "../components/Hero";
import About from "../components/About";
import Categories from "../components/Categories";
import Popular from "../components/Popular";

function Home() {
    
    return (
        <Apps>
            <Hero />
            <About />
            <Categories />
            <Popular />
        </Apps>
    )

}

export default Home