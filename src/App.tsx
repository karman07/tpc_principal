import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AgendaPage from "./pages/Agenda";
import SpeakersPage from "./pages/Speakers";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Principal from "./pages/Principal";
import Chairman from "./pages/Chairman";
import ViceChairman from "./pages/ViceChairman";
import Coordinator from "./pages/Coordinator";
import ScrollToTop from "./components/ScrollToTop";
import Carousel from "./pages/MessageCarousel";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/agenda' element={<AgendaPage />} />
          <Route path='/speakers' element={<SpeakersPage />} />
          <Route path='/principals-message' element={<Principal />} />
          <Route path='/chairmans-message' element={<Chairman />} />
          <Route path='/vice-chairmans-message' element={<ViceChairman />} />
          <Route path='/coordinators-message' element={<Coordinator />} />
          <Route path="/wisdom-bites" element={<Carousel/>}/>
          <Route
            path='*'
            element={
              <div className='h-[50vh] flex justify-center items-center text-3xl'>
                Page Not Found
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
