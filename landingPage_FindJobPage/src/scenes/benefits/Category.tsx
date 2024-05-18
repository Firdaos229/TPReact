import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Category = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div className="border-gray-30 w-full border-2 px-5 py-8 hover:bg-primary-color hover:text-white-color">
      <div className="mb-4 ">
        <div className="p-4 text-primary-color hover:text-white-color">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-black ">{title}</h4>
      <div className="flex">
        <p className="my-3">{description}</p>
        <AnchorLink
          className="text-primary-500 hover:text-secondary-500 text-sm "
          onClick={() => setSelectedPage("findjobs")}
          href={`/src/pages/FindJobs.tsx`}
        >
          <p>
            <ArrowRightIcon className="my-3 mx-4 h-6 w-6" />
          </p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Category;
