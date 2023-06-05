//import navbar into layout
"use client"; //this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

//because we using typescript we need to assigns out items specific types
interface NavItem {
  label: string;
  page: string;
}

//below is items created for the type - typescript
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme(); //useTheme is imported
  const currentTheme = theme === "system" ? systemTheme : theme; //initialize a constant
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false); //this is controlling whether the navbar is in desktop or mobile view and if it should be opened + menu

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-white">
                  Elri Le Grange
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

//The outer div classname holds the typescript to re-allign the navbar items - NAV_ITEMS
//Header classname will only take effect when we add togle
//Div above h2 - classname gives it padding (top and bottom)
/*In order for light and dark mode to work, go to layout page and add a line of code: 
import {ThemeProvider} from 'next-themes' and on the layout page wrap the Navbar component
in <ThemeProvider enableSystem={true} attribute="class"> tags + "use client" on the top of layout page*/
//Classname ubove the button with IoMdClose - is to hide the menue bar whena at certain siz

/*To fix navbar when shrinked we change this
{NAV_ITEMS.map((item, idx) => {
  return <a key={idx}>{item.label}</a>;
})}
to importing Link that is imported, so <a> was removed and replaced ny link
*/

//Link - all parameters needed for smoot scrolling
