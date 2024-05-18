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
            <HText>Compagny Profile</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes <br /> to
              get you to your ultimate fitness goals with ease. We provide true <br />
              care into each and every member.
              We provide world class fitness equipment, trainers and classes <br /> to
              get you to your ultimate fitness goals with ease. We provide true <br />
              care into each and every member.
              We provide world class fitness equipment, trainers and classes <br /> to
              get you to your ultimate fitness goals with ease. We provide true <br />
              care into each and every member.
            </p>

            <HText>Conctact</HText>
            <p className="my-5 text-sm">
              
             <div className="mt-3 flex gap-2">
             <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                 Twitter.com/stripe
                </button>
                <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                  Facebook.com/StripeHQ
                </button>
              </div>

               
             <div className="mt-3 flex gap-2">
             <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
                 Linkedin.com/compagny/Stripe
                </button>
              </div> 
            </p>

          </div>

          <div>
            <div>
             <HText>Tech stack</HText>
              <p className="my-5 text-sm">
                learn about the technology and tools that <br />
                Stripe uses.
                 <hr />
              </p>
              <div className="my-5">Apply Before <span className="mx-20">July 31, 2021</span></div>
              <div className="my-5">Job Posted On <span className="mx-20">July 1, 2021</span></div>
              <div className="my-5">Job Type <span className="mx-20 ">Full-Time</span></div>
              <div className="my-5">Salary <span className="mx-20 ">$75K-$85K USD</span></div>
            </div>
            <hr />

            <div className="my-5">
             <HText>Office Location</HText>
             <p className="my-5 text-sm">
                Stripe office spread across 20 countries <br />
              
              </p>
              <div className="my-5">United States<span className="mx-20"> </span></div>
              <div className="my-5">Englang   <span className="mx-20"></span></div>
              <div className="my-5">Japan  <span className="mx-20 "></span></div>
              <div className="my-5">Australia <span className="mx-20 "></span></div>
              <div className="my-5">Chine <span className="mx-20 "></span></div>
            
            <hr />
            
            
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

    

      </motion.div>
    </section>
  );//
};

export default Benefits;
