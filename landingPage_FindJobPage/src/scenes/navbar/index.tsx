import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-light-blue-color drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <h1 className="font-bold">JobHuntly</h1>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    to="/findjobs"
                    className={`${
                      selectedPage === "findjobs" ? "text-black" : ""
                    } transition duration-500 hover:text-secondary-color`}
                    onClick={() => setSelectedPage("findjobs")}
                  >
                    Find Jobs
                  </Link>
                  <Link
                    to="/browsecompanies"
                    className={`${
                      selectedPage === "browsecompanies" ? "text-black" : ""
                    } transition duration-500 hover:text-secondary-color`}
                    onClick={() => setSelectedPage("browsecompanies")}
                  >
                    Browse Companies
                  </Link>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link
                    to="/login"
                    className="font-bold text-primary-color"
                    onClick={() => setSelectedPage("login")}
                  >
                    Login
                  </Link>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Sign up
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-primary-color p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="bg-primary-100 fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              to="/findjobs"
              className={`${
                selectedPage === "findjobs" ? "text-black" : ""
              } transition duration-500 hover:text-secondary-color`}
              onClick={() => {
                setIsMenuToggled(false);
                setSelectedPage("findjobs");
              }}
            >
              Find Jobs
            </Link>
            <Link
              to="/browsecompanies"
              className={`${
                selectedPage === "browsecompanies" ? "text-black" : ""
              } transition duration-500 hover:text-secondary-color`}
              onClick={() => {
                setIsMenuToggled(false);
                setSelectedPage("browsecompanies");
              }}
            >
              Browse Companies
            </Link>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              to="/login"
              className="font-bold text-primary-color"
              onClick={() => {
                setIsMenuToggled(false);
                setSelectedPage("login");
              }}
            >
              Login
            </Link>
            <ActionButton setSelectedPage={setSelectedPage}>
              Sign up
            </ActionButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
