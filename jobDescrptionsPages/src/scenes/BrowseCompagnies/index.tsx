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
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Full Healthcare",
    description:
      "we believe in thriving communities and that starts with our team being happy and health.",
  },
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

  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Commuter Benefits",
    description:
      "we're grateful for all the time and energy each team member puts into getting to work every day.",
  },

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "We give back",
    description:
      "we anonymously match any donation our employees make (up to $/£600) so they care about most-times t.",
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
  const firstBenefits = benefits.slice(0, 4);
  const secondBenefits = benefits.slice(4);

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.BrowseCompagnies)}
      >
        {/* HEADER */}
        <div className="flex">
          <div className="md:my-5 md:w-3/5" >
            <HText>Description</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes <br /> to
              get you to your ultimate fitness goals with ease. We provide true <br />
              care into each and every member.
            </p>

            <HText>Responsabilite</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, <br />
              trainers and classes to <br />
              get you to your ultimate fitness <br />
              goals with ease. We provide true <br />
              care into each and every member. <br />
            </p>

            <HText>Who You Are</HText>
            <p className="my-5 text-sm">
              We provide world class fitness <br />
              equipment, trainers and classes to <br />
              get you to your ultimate fitness goals <br />
              with ease. We provide true  <br />
              care into each and every member.  <br />
            </p>

            <HText>Nice-To-Have</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, <br />
              trainers and classes to <br />
              get you to your ultimate fitness goals with ease. We provide true <br />
            
            </p>
          </div>

          <div>
            <div>
             <HText>About this role</HText>
              <p className="my-5 text-sm">
                5 applied of 10 capacity <hr />
              </p>
              <div className="my-5">Apply Before <span className="mx-20">July 31, 2021</span></div>
              <div className="my-5">Job Posted On <span className="mx-20">July 1, 2021</span></div>
              <div className="my-5">Job Type <span className="mx-20 ">Full-Time</span></div>
              <div className="my-5">Salary <span className="mx-20 ">$75K-$85K USD</span></div>
            </div>
            <hr />

            <div className="my-5">
             <HText>Categories</HText>
            
             <div className="mt-3 flex gap-2">
                <button className="rounded-full border-2 border-white bg-green-100 px-2 py-2 text-green-300">
                  Marketing
                </button>
                <button className="rounded-full border-2 border-white px-4 py-2 bg-orange-100 text-orange-300">
                  Design
                </button>
              </div>

              
            </div>

            <div className="my-5">
             <HText>Reqquired Skills</HText>
            
             <div className="mt-3 flex gap-2">
             <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                 Project Management
                </button>
                <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                  Copywriting
                </button>
              </div>

              
             <div className="mt-3 flex gap-2">
             <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                 Social Media Marketing
                </button>
                <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                  English
                </button>
              </div>

              
             <div className="mt-3 flex gap-2">
             <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                 Copy Editing
                </button>
            
              </div>
            </div>
            
          </div> 
        </div>
        

           {/* Premières catégories */}
           <div className="mt-5 justify-between gap-4l::ll::l:l:: md:flex">
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

            {/* Secondes jobs */}
          <div className="mt-5 justify-between gap-6 md:flex">
            {secondBenefits.map((benefit: BenefitType) => (
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
                   Stripe{" "}
                    <span className="text-primary-color"><br /> Read more about Stripe</span>
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
