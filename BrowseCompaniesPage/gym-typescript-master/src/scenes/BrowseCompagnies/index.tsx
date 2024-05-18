import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./BrowseCompagnies";

const benefits: Array<BenefitType> = [
 
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Unlimited Vacation",
    description:
      "we believe you should have a flexible schedule that makes space for family weliness.and fun",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Skill Development",
    description:
      "we believe in always learning and leveling up our skills. Whetter it's a conference or coline course.",
  },

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Team Summits",
    description:
      "Every 6 months we have a full team summit where we have fun reflect,and plan for the upcoming quarter.",
  }, 

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Remove working",
    description:
      "you know how you perform your best.Work from home,coffee shop or anywhere when you feel like it.",
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

const Benefits = ({ setSelectedPage }: Props) => {
  // Séparer les catégories en deux groupes
  const firstBenefits = benefits.slice(0.4);
  

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.BrowseCompagnies)}
      >
        {/* HEADER */}
        <div className="flex">
          <div className="md:my-5 md:w-3/5" >
            <HText>Companies by Category</HText>
            <div className="categories">
          
        </div>
            
            
            
          </div> 
        </div>
        

           {/* Premières catégories */}
           <div className="mt-5 justify-between gap-6 md:flex">
            {firstBenefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>

           
    

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items right justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-right-20 before:z-[1] before:content-abstractwaves">
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
                   24 Results
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
              <br />
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>

              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
