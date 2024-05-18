import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { CategoryType, SelectedPage } from "@/shared/types";
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
import { motion } from "framer-motion";
import dash from "@/assets/dash.png";
import Category from "./Category";
import AnchorLink from "react-anchor-link-smooth-scroll";

const categories: Array<CategoryType> = [
  {
    icon: <PaintBrushIcon className="h-6 w-6" />,
    title: "Design",
    description: "235 jobs available",
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Sales",
    description: "756 jobs available",
  },
  {
    icon: <MegaphoneIcon className="h-6 w-6" />,
    title: "Marketing",
    description: "140 jobs available",
  },
  {
    icon: <BanknotesIcon className="h-6 w-6" />,
    title: "Finance",
    description: "325 jobs available",
  },
  // Ajoutez d'autres catégories ici
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Technology",
    description: "436 jobs available",
  },
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title: "Engineering",
    description: "542 jobs available",
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" />,
    title: "Business",
    description: "211 jobs available",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Human Resource",
    description: "346 jobs available",
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

const Categories = ({ setSelectedPage }: Props) => {
  // Séparer les catégories en deux groupes
  const firstCategories = categories.slice(0, 4);
  const secondCategories = categories.slice(4);

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage("browsecompanies")}>
        {/* HEADER */}
        <motion.div
          className="flex space-x-28 font-bold text-black md:my-5 md:w-3/5"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            Explore by <span className="text-secondary-color">category</span>
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
        </motion.div>

        {/* Premières catégories */}
        <motion.div
          className="mt-5 justify-between gap-6 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {firstCategories.map((category: CategoryType) => (
            <Category
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Secondes catégories */}
        <motion.div
          className="mt-5 justify-between gap-6 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {secondCategories.map((category: CategoryType) => (
            <Category
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-10 rounded-br-full bg-primary-color px-5 pt-1 text-white-color md:mt-28 md:flex">
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="">
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Start posting <br />
                    jobs today
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-white-color">
                Start positing jobs for only $10.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="">
              <div className="">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Sign Up For Free
                </ActionButton>
              </div>
            </div>
          </div>

          {/* GRAPHIC */}
          <img className="mx-11 w-1/2" alt="dashboard" src={dash} />
        </div>
      </motion.div>
    </section>
  );
};

export default Categories;
