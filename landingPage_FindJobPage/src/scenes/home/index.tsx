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
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage("findjobs")}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mr-auto mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="">
              <div className="">
                <HText>
                  Discover <br />
                  more than <br />
                  <span className="text-secondary-color">5000+ Jobs</span>
                </HText>
                <img className="my-5" src={group} />
              </div>
            </div>

            <p className="text-md mt-8">
              Great platform for the job seeker that searching for <br />
              new career heights and passionate about startups.
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
          </motion.div>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-white-color py-10">
          <div className="mx-auto w-5/6">
            <div className="mb-3 font-bold text-light-blue-color">
              <h1>Companies we helped grow</h1>
            </div>
            <div className="flex w-20 items-center justify-between gap-32">
              <img alt="redbull-sponsor" src={SponsorVodafone} />
              <img
                alt="forbes-sponsor"
                className="bg-light-blue-color"
                src={SponsorIntel}
              />
              <img alt="fortune-sponsor" src={SponsorTesla} />
              <img
                alt="fortune-sponsor"
                className="bg-light-blue-color"
                src={SponsorAmda}
              />
              <img alt="fortune-sponsor" src={SponsorTalkit} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
