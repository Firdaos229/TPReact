import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  button1Text: string;
  button2Text: string;
  button3Text: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Job = ({
  icon,
  title,
  subtitle,
  button1Text,
  button2Text,
  button3Text,
  setSelectedPage,
}: Props) => {
  return (
    <div className="flex w-full border-2 border-gray-300 px-5 py-8">
      <div className="mb-4 flex">
        <div className="w-14 p-4 text-primary-color ">{icon}</div>
      </div>

      <div className="">
        <h4 className="font-bold text-black">{title}</h4>
        <p>{subtitle}</p>
        <div className="mt-3 flex gap-2">
          <button className="rounded-full border-2 border-white bg-green-100 px-2 py-2 text-green-300">
            {button1Text}
          </button>
          <button className="rounded-full border-2 border-orange-300 px-4 py-2 text-orange-300">
            {button2Text}
          </button>
          <button className="rounded-full border-2 border-primary-color px-4 py-2 text-primary-color">
            {button3Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;