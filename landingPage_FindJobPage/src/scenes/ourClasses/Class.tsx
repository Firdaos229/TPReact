import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Job = ({
  icon,
  title,
  subtitle,
  description,
  button1Text,
  button2Text,
  setSelectedPage,
}: Props) => {
  return (
    <div className="w-full border-2 border-gray-300 px-5 py-8">
      <div className="mb-4 flex">
        <div className="w-14 p-4 text-primary-color ">{icon}</div>
        <button className="ml-10 w-1/2 border-2 border-primary-color px-1 text-primary-color ">
          FULL TIME
        </button>
      </div>

      <h4 className="font-bold text-black">{title}</h4>
      <p>{subtitle}</p>
      <div className="">
        <p className="my-3 flex-1">{description}</p>
        <div className="flex gap-2">
          <button className="rounded-full border-2 border-white bg-orange-100 px-2 py-1 text-orange-300">
            {button1Text}
          </button>
          <button className="rounded-full border-2 border-white bg-green-100 px-4 py-2 text-green-300">
            {button2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
