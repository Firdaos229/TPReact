import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

import SponsorVodafone from "@/assets/SponsorVodafone.png";
import SponsorTesla from "@/assets/SponsorTesla.png";
import SponsorIntel from "@/assets/SponsorIntel.png";
import SponsorTalkit from "@/assets/SponsorTalkit.png";
import SponsorAmda from "@/assets/SponsorAmda.png";
import group from "@/assets/Group.svg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className=" gap-16 bg-light-blue-color py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-1/2 items-center justify-center ">
        {/* MAIN HEADER */}
        <div className="z-10 mr-auto mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="">
              <div className="">
                <HText>
                  Find your
                  <span className="text-secondary-color"> dream Jobs</span>
                </HText>
                <img className="my-5" src={group} />
              </div>
            </div>

            <p className="text-md mt-8">
              Find your next career at companies like Hubspot, Nike, and Dropbox
            </p>

            <div className="mt-8 bg-white-color py-4 px-3">
              <input
                className="w-21 px-10 py-2 shadow-lg"
                type="text"
                placeholder="Job title or keyword"
              />
              <select className="w-22 rounded-md px-1 py-2 shadow-lg">
                <option value="Florence,Italy">Florence,Italy</option>
                <option value="Québec,Canada">Québec,Canada</option>
                <option value="France,Paris">France,Paris</option>
              </select>
              <ActionButton setSelectedPage={setSelectedPage}>
                Search my job
              </ActionButton>
            </div>
            <p className="mt-4 text-sm">
              Popular : UI Designer, UX Researcher, Android, Admin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
