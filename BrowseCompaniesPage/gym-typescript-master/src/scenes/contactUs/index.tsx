import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import twitter from "@/assets/twitter.png";
import { JosType, SelectedPage } from "@/shared/types";
import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  ChartBarIcon,
  MegaphoneIcon,
  ArrowRightIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
import Job from "./Class";

const jobs: Array<JosType> = [
  {
    
      
    icon: <ChartBarIcon className="h-6 w-6" />,
    title:"Nomad",
    subtitle: "Nomad is located in Paris, France. Nomad has generated $728,000 in sales (USD).",
    button1Text: "Business Service",
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Discord",
    subtitle: "We'd love to work with someone like you. We care about creating a delightful experience.",
    button1Text: "Business Service",
  },
  {
    icon: <MegaphoneIcon className="h-6 w-6" />,
    title: "Maze",
    subtitle: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
    button1Text: "Business Service",
  },
  {
    icon: <WifiIcon className="h-6 w-6" />,
    title: "Udacity",
    subtitle: "Udacity is a new type of online university that teaches the actual programming skills.",
    button1Text: "Business Service",
  },
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Webflow",
    subtitle: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    button1Text: "Business Service",
  },
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "Foundation",
    subtitle: "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    button1Text: "Business Service",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Jobs = ({ setSelectedPage }: Props) => {
  return (
    <section id="jobs" className="mx-auto min-h-full w-5/6 py-20">
      <div>
        {/* HEADER */}
        <div className="flex space-x-28 font-bold text-black md:my-5 md:w-3/5">
          <HText>
            Recommended Companies 
          </HText>
          
          <AnchorLink
            className="flex items-center text-sm text-primary-color"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            {/* <span>
              <ArrowRightIcon className="ml-2 h-6 w-6" />
            </span> */}
          </AnchorLink>
        </div>
        <p>Based on your profile, company preferences, and recent activity</p>

        {/* Jobs Grid */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-6">
          {jobs.slice(0, 6).map((job: JosType) => (
            <Job
              key={job.title}
              icon={job.icon}
              title={job.title}
              subtitle={job.subtitle}
              button1Text={job.button1Text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
