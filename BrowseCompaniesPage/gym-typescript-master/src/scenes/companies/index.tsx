import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import dash from "@/assets/dash.png";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "../ourClasses/Class";
import ActionButton from "@/shared/ActionButton";



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
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

export default OurClasses;
