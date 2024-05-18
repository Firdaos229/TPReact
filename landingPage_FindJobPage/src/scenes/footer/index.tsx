import Logo from "@/assets/Logo.png";
import HText from "@/shared/HText";
import Link from "../navbar/Link";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton";

const Footer = () => {
  return (
    <footer className="bg-footer-color py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h1 className="font-bold">JobHuntly</h1>
          <p className="my-5">
            Great platform for the job seeker that <br />
            passionate about startups.Find your dream job easier.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">About</h4>

          <p className="my-5">
            <Link page="Companies" />
          </p>
          <p className="my-5">
            <Link page="Pricing" />
          </p>
          <p className="my-5">
            <Link page="Terms" />
          </p>
          <p className="my-5">
            <Link page="Advice" />
          </p>
          <p className="my-5">
            <Link page="Privacy Policy" />
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Resources</h4>
          <p className="my-5">
            <Link page="Help Docs" />
          </p>
          <p className="my-5">
            <Link page="Guide" />
          </p>
          <p className="my-5">
            <Link page="Updates" />
          </p>
          <p className="my-5">
            <Link page="Contactus" />
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Get job notifications</h4>
          <p className="my-5">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="justify-content mx-auto w-5/6 gap-4 md:flex">
            <input
              className="w-64 border border-black p-2"
              type="text"
              name=""
              placeholder="Email Address"
            />

            <ActionButton>Suscribe</ActionButton>
          </div>
        </div>
      </div>
      <hr />
      <div className="justify-content my-5 mx-auto w-5/6 gap-16 md:flex">
        <p>2021 © JobHuntly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
