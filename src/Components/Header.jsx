import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/nlogo.svg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import SearchModal from "./SearchModal";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../Components/LangSwitcher";

const Header = () => {
  const [openMenuItems, setOpenMenuItems] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggle = (index) => {
    setOpenMenuItems((prev) => (prev === index ? null : index));
  };

  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      submenuItems: [
      { label: "About", path: "/about" },
      { label: "Identity", path: "/identity" },
      { label: "Faqs", path: "/faq" },
      { label: "Warranty Policy", path: "/warranty" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/policy" },
    ],
    },
    {
      title: "Information",
      submenuItems: [
      { label: "About", path: "/about" },
      { label: "Identity", path: "/identity" },
      { label: "Faqs", path: "/faq" },
      { label: "Warranty Policy", path: "/warranty" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/policy" },
    ],
    },
    {
      title: "Help Center",
      submenuItems: [
      { label: "About", path: "/about" },
      { label: "Identity", path: "/identity" },
      { label: "Faqs", path: "/faq" },
      { label: "Warranty Policy", path: "/warranty" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/policy" },
    ],
    },
    {
      title: "Blog",
      submenuItems: [
      { label: "About", path: "/about" },
      { label: "Identity", path: "/identity" },
      { label: "Faqs", path: "/faq" },
      { label: "Warranty Policy", path: "/warranty" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/policy" },
    ],
    },
    {
      title: "Learn Ergonomics",
      submenuItems: [
      { label: "About", path: "/about" },
      { label: "Identity", path: "/identity" },
      { label: "Faqs", path: "/faq" },
      { label: "Warranty Policy", path: "/warranty" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/policy" },
    ],
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  console.log(menuItems,"menuItems");
  
 

  return (
    <header className="sticky top-0 z-50 bg-transparent py-4">
      <div className="xl:max-w-[80%] md:max-w-full mx-auto relative flex items-center justify-between py-4 px-4 bg-white sm:shadow border-black rounded-2xl">
        <div className="">
          {/* Logo */}
          <NavLink to={"/"}>
            <img src={logoImg} alt="Logo" className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:text-base lg:flex xl:flex xxl:flex md:gap-1 lg:gap-2 gap-4 items-center justify-center w-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group text-lg"
              onMouseLeave={() => setOpenMenuItems(null)}
            >
              {item.submenuItems ? (
                <>
                  <div
                    className="cursor-pointer text-gray-700 hover:text-primary flex items-center gap-1"
                    onMouseEnter={() => setOpenMenuItems(index)}
                  >
                   {t(item.title)}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMenuItems === index ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <ul
                    className={`flex items-center justify-center -my-3 gap-4 p-[20px] font-bold absolute top-full text-black w-full left-0 shadow-md bg-gray-100 transition-all ease-in-out duration-300  rounded-b-[10px] ${
                      openMenuItems === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                      } group-hover:visible group-hover:opacity-100 `
                    }
                  >
                    {item.submenuItems.map((subItem, subIndex) => (
                      
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                        >
                          {/* {t(subItem.label)} */}
                          {t(`submenuItems.${item.title}.${subItem.label}`)}
                          {/* {console.log(subItem,"subItem")}  */}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className="text-gray-800 hover:text-primary transition"
                >
                  {t(item.title)}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="flex gap-2 items-center justify-end">
          <LangSwitcher />
          <div className="hidden sm:flex items-center gap-4 text-gray-700 text-xl listshowing">
            <button
              className="hover:text-primary transition"
              onClick={() => setIsModalOpen(true)}
            >
              <FiSearch />
            </button>
            <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <button className="hover:text-primary transition">
              <FiUser />
            </button>
            <button className="hover:text-primary transition">
              <FiHeart />
            </button>
            <button className="hover:text-primary transition">
              <FiShoppingBag />
            </button>
          </div>

           {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-3xl text-gray-700"
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
        </div>

       

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden flex flex-col z-50">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                {item.submenuItems ? (
                  <>
                    <div
                      className="flex justify-between items-center px-4 py-3 text-gray-700 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleToggle(index)}
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMenuItems === index ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    {openMenuItems === index && (
                      <ul className="bg-gray-50">
                        {item.submenuItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subItem.path}
                              onClick={() => setMobileOpen(false)}
                              className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                               {t(subItem.label)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                  >
                    {t(item.title)}
                  </NavLink>
                )}
              </div>
            ))}
          {/* Mobile Icons */}
          <div className="flex justify-center gap-6 py-4 text-xl border-t sm:hidden">
            <FiSearch />
            <FiUser />
            <FiHeart />
            <FiShoppingBag />
          </div>
            <div className="hidden sm:flex"></div> 
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
