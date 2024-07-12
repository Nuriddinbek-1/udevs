import Navbar from "./components/n1_navbar/Navbar";
import MainPage from "./components/n2_main_page/MainPage";
import OurServices from "./components/n3_our_services/OurServices";
import Team from "./components/n4_team/Team";
import MobileApp from "./components/n5_mobile_app/MobileApp";
import Contact from "./components/n17_contact_us/Contact";
import Footer from "./components/n18_footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <OurServices />
      <Team />
      <MobileApp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
