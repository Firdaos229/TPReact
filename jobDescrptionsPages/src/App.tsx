import Navbar from "@/scenes/navbar";
import FindJobs from "@/scenes/FindJobs";
import BrowseCompagnies from "@/scenes/BrowseCompagnies";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.FindJobs
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.FindJobs);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white-color">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <FindJobs setSelectedPage={setSelectedPage} />
      <BrowseCompagnies setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      
      <Footer />
    </div>
  );
}

export default App;
