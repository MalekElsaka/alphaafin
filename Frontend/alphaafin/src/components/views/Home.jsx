import About from "../about/About";
import ContactUs from "../contacts/ContactUs";
import Pawan from "../contacts/Pawan";
import QuickContact from "../contacts/QuickContact";
import Founder from "../founder/Founder";
import Carousel from "../Navbar/Carousel"
import Serivces from "../services/Services";

const Home = () => {
    return (
        <>
            <Carousel />
            <About />
            <Serivces />
            <Founder />
            <ContactUs />
            <Pawan />
            <QuickContact/>
        </>
    );
}

export default Home;