import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-color px-10 py-2 text-white hover:bg-secondary-color"
      onClick={() => setSelectedPage("browsecompanies")}
      href={`/browsecompanies`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
