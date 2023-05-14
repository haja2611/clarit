import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home1/Home";
import Contact from "./pages/contact/Contact";
import Careers from "./pages/careers/Careers";
import About from "./pages/home/about/aboutt/About";
import Informatica from "./servicepages/consulting/informatica/Informatica";
import Salesforce from "./servicepages/consulting/salesforce/Salesforce";
import PostgreSQL from "./servicepages/consulting/postgreSQL/PostgreSQL";
import RedHat from "./servicepages/consulting/redHat/RedHat";
import Web from "./servicepages/consulting/web Development/WebDevelopment";
import Service from "./servicepages/Service/Service";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Onlinetraining from "./servicepages/onlinetraining/Onlinetraining";
import Trainpage from "./servicepages/trainingpage/Trainpage";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact Us" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/About Us" element={<About />} />
            <Route path="/Services" element={<Service />} />
            <Route path="/Informatica" element={<Informatica />} />
            <Route path="/Salesforce" element={<Salesforce />} />
            <Route path="/PostgreSQL" element={<PostgreSQL />} />
            <Route path="/RedHat" element={<RedHat />} />
            <Route path="/Web" element={<Web />} />
            <Route path="/Online Training" element={<Onlinetraining />} />
            <Route path="/Onsite Training" element={<Trainpage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </div>
  );
}

export default App;
