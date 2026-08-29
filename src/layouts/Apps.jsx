import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Apps({ children }) {
    return (
        <>
            <Navbar />
                <main className="px-20 py-5 mt-25">
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Apps