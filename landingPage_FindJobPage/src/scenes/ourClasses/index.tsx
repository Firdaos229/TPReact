import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import twitter from "@/assets/twitter.png";
import { JobType, SelectedPage } from "@/shared/types";
import {
  UserGroupIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  BanknotesIcon,
  ChartBarIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  ArrowRightIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
import Job from "./Class";
import AnchorLink from "react-anchor-link-smooth-scroll";

const jobs: Array<JobType> = [
  {
    icon: (
      <img
        className="h-6 w-6 rounded-full"
        alt="contact-us-page-graphic"
        src={ContactUsPageGraphic}
      />
    ),
    title: "Email Marketing",
    subtitle: "Revolut - Madrid, Spain",
    description: "Revolut is looking for Email Marketing to helo team ma",
    button1Text: "Marketing",
    button2Text: "Design",
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Brand Designer",
    subtitle: "Dropbox-San Francisco,US",
    description: "Dropbox is loking for Brand Designer to help team t...",
    button1Text: "Design",
    button2Text: "Business",
  },
  {
    icon: <MegaphoneIcon className="h-6 w-6" />,
    title: "Email Marketing",
    subtitle: "Pitch - Berlin, Germany",
    description: "Pitch is looking for Customer Manager  t..",
    button1Text: "Marketing",
    button2Text: "",
  },
  {
    icon: <WifiIcon className="h-6 w-6" />,
    title: "Visual Designer",
    subtitle: "Blinklist - Granada,Spain",
    description: "Blinkist is looking for Visual Designer to help team desi..",
    button1Text: "",
    button2Text: "Design",
  },
  // Ajoutez d'autres catégories ici
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Product Designer",
    subtitle: "ClasPass - Manchester,UK",
    description: "ClassPass is looking for Product Designer to  us..",
    button1Text: "Marketing",
    button2Text: "Design",
  },
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "Lead Designer",
    subtitle: "Canva - Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n..",
    button1Text: "Design",
    button2Text: "Business",
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" />,
    title: "Brand Strategist",
    subtitle: "GoDaddy-Marseille,France",
    description: "GoDaddy is loking for Brand Strategist to join the team..",
    button1Text: "Marketing",
    button2Text: " ",
  },
  {
    icon: (
      <img
        className="h-6 w-6 rounded-full"
        alt="contact-us-page-graphic"
        src={twitter}
      />
    ),
    title: "Data Analyst",
    subtitle: "Twitter - San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi...",
    button1Text: "Technology",
    button2Text: "",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Jobs = ({ setSelectedPage }: Props) => {
  // Séparer les catégories en deux groupes
  const firstJobs = jobs.slice(0, 4);
  const secondJobs = jobs.slice(4);

  return (
    <section id="jobs" className="mx-auto min-h-full w-5/6 py-20">
      <div>
        {/* HEADER */}
        <div className="flex space-x-28 font-bold text-black md:my-5 md:w-3/5">
          <HText>
            Featured <span className="text-secondary-color">jobs</span>
          </HText>
          <AnchorLink
            className="flex items-center text-sm text-primary-color"
            onClick={() => setSelectedPage("findjobs")}
            href={`/src/pages/FindJobs.tsx`}
          >
            <p>Show all jobs</p>
            <span className="">
              <ArrowRightIcon className="ml-2 h-6 w-6" />
            </span>
          </AnchorLink>
        </div>

        {/* Premières catégories */}
        <div className="mt-5 justify-between gap-6 md:flex">
          {firstJobs.map((job: JobType) => (
            <Job
              key={job.title}
              icon={job.icon}
              title={job.title}
              subtitle={job.subtitle}
              description={job.description}
              button1Text={job.button1Text}
              button2Text={job.button2Text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>

        {/* Secondes jobs */}
        <div className="mt-5 justify-between gap-6 md:flex">
          {secondJobs.map((job: JobType) => (
            <Job
              key={job.title}
              icon={job.icon}
              title={job.title}
              subtitle={job.subtitle}
              description={job.description}
              button1Text={job.button1Text}
              button2Text={job.button2Text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
