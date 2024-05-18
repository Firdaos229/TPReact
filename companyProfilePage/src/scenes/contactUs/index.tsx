import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import twitter from "@/assets/twitter.png";
import { JobsType, SelectedPage } from "@/shared/types";
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

const jobs: Array<JobsType> = [
  {
    icon: (
      <img
        className="h-6 w-6 rounded-full"
        alt="contact-us-page-graphic"
        src={ContactUsPageGraphic}
      />
    ),
    title: "Social Media Assistant",
    subtitle: "Nomad . Paris, France",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Social Media Assistant",
    subtitle: "Netlify . Paris, France",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  {
    icon: <MegaphoneIcon className="h-6 w-6" />,
    title: "Brand Designer",
    subtitle: "Dropbox . San Francisco, USA",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  {
    icon: <WifiIcon className="h-6 w-6" />,
    title: "Brand Designer",
    subtitle: "Maze . San Francisco, USA",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  // Ajoutez d'autres catégories ici
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Interactive Developer",
    subtitle: "Terraform . Hamburg, Germany",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "Interactive Developer",
    subtitle: "Udacity . Hamburg, Germany",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" />,
    title: "HR Manager",
    subtitle: "Packer . Lucern, Switzerland",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
  },
  {
    icon: (
      <img
        className="h-6 w-6 rounded-full"
        alt="contact-us-page-graphic"
        src={twitter}
      />
    ),
    title: "HR Manager",
    subtitle: "Webflow . Lucern, Switzerland",
    button1Text: "Full-Time",
    button2Text: "Marketing",
    button3Text: "Design",
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
            Similiar <span className="text-secondary-color">jobs </span>
          </HText>
          <AnchorLink
            className="flex items-center text-sm text-primary-color"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href="{#${SelectedPage.ContactUs}}"
          >
             <p>Show all jobs</p>
            <span>
              <ArrowRightIcon className="ml-2 h-6 w-6" />
            </span>
          </AnchorLink>
        </div>

        {/* Jobs Grid */}
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {jobs.map((job: JobsType) => (
            <Job
              key={job.title}
              icon={job.icon}
              title={job.title}
              subtitle={job.subtitle}
              button1Text={job.button1Text}
              button2Text={job.button2Text}
              button3Text={job.button3Text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;