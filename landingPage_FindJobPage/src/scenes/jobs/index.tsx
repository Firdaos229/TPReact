import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
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
} from "@heroicons/react/24/solid";
import Job from "./Job";
import AnchorLink from "react-anchor-link-smooth-scroll";

const jobs: Array<ClassType> = [
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  // Ajoutez d'autres catégories ici
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
  {
    name: "Design",
    description: "235 jobs available",
    image: "string",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

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
        <div className="font-bold text-black md:my-5 md:w-3/5">
          <HText>
            Featured <span className="text-secondary-color">jobs</span>
          </HText>
          <AnchorLink
            className="text-sm font-bold text-primary-color"
            onClick={() => setSelectedPage("browsecompanies")}
            href={`/src/pages/BrowseCompanies.tsx`}
          >
            <p>
              Show all jobs <ArrowRightIcon className="my-3 mx-4 h-6 w-6" />
            </p>
          </AnchorLink>
        </div>

        {/* Premières catégories */}
        <div className="mt-5 justify-between gap-6 md:flex"></div>

        {/* Secondes jobs */}
        <div className="mt-5 justify-between gap-6 md:flex"></div>
      </div>
    </section>
  );
};

export default Jobs;
