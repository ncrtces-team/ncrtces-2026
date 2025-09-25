import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import About from "../pages/About";
import Tracks from "../pages/Tracks";
import Committee from "../pages/Committee";
import Keynote from "../pages/Keynote";
import Guidelines from "../pages/guide";
import Schedule from "../pages/Schedule";
import Registration from "../pages/Registration";
import CallForPapers from "../pages/callforpapers";
import Contact from "../pages/Contact";
import Venue from "../pages/Venue";
import Footer from "../components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <About />
      <Keynote />
      <Tracks />
      <Committee />
      <CallForPapers />
      <Guidelines />
      <Schedule />
      <Registration />
      <Contact />
      <Venue />
      <Footer />
    </>
  );
};

export default App;
