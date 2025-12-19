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
import CallForSpecialSession from "../pages/callforspecialsession";
import Contact from "../pages/Contact";
import Venue from "../pages/Venue";
// import Acknowledgements from "../pages/Acknowledgements";
import Footer from "../components/footer";

export const PreAckApp = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <About />
      <Keynote />
      <Tracks />
      <Committee />
      <CallForPapers />
      <CallForSpecialSession />
      <Guidelines />
      <Schedule />
      <Registration />
    </>
  );
};

export const PostAckApp = () => {
  return (
    <>
      <Contact />
      <Venue />
      <Footer />
    </>
  );
};
