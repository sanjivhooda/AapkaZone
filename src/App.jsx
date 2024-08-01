import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Footer from "./components/landingpage/Footer";
import Header from "./components/landingpage/Header";
import EventCard from "./components/events/EventCard";
import EventInfo from "./components/events/EventInfo";
import AboutUs from "./components/Common/AboutUs";
import DetailsPage from "./components/landingpage/DetailsPage";
import CareCounsellor from "./components/landingpage/CareCouncellor";
import CarePlans from "./components/landingpage/CarePlan";
import TermsAndConditions from "./components/Common/TermsAndConditons";
import CookiePolicy from "./components/Common/CookiePolicy";
import Disclaimer from "./components/Common/Disclaimer";
import Blog from "./components/Common/Blog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventCard />} />
        <Route path="/event/info" element={<EventInfo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/details/:name" element={<DetailsPage />} /> 
        <Route path="/care-councellor" element={<CareCounsellor />} />
        <Route path="/care-plan" element={<CarePlans />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
