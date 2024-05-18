import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";
import FindJobs from "./pages/FindJobs";
import BrowseCompanies from "./pages/BrowseCompanies";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import Categories from "@/scenes/benefits";
import Home from "./scenes/home";
import Jobs from "./scenes/ourClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>("findjobs");

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Navbar
        isTopOfPage={true}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
      <Categories />
      <Jobs />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />

      <Routes>
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/browsecompanies" element={<BrowseCompanies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
