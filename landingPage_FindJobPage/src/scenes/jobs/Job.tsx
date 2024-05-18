import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Job = ({
  icon,
  title,
  subtitle,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <div className="border-gray-30 w-full border-2 px-5 py-8 hover:bg-primary-color hover:text-white-color">
      <div className="mb-4 ">
        <div className="p-4 text-primary-color hover:text-white-color">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-black ">{title}</h4>
      <p className=" ">{subtitle}</p>
      <div className="flex">
        <p className="my-3">{description}</p>
        
      </div>
    </div>
  );
};

export default Job;
