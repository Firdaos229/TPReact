import React from "react";
import Navbar from "../scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import ContactUs from "@/scenes/allJob";
import Home from "@/scenes/dreamJob";

import Footer from "@/scenes/footer";

function FindJobs() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>("findjobs");

  return (
    <div>
      <h1 className="my-10 bg-secondary-color">Ici cest findJObs</h1>
      <Navbar
        isTopOfPage={true}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default FindJobs;
