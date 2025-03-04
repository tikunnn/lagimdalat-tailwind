import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/images/final trans (onlyVocano).png";
import { SlSettings } from "react-icons/sl";
import { GiStrawberry } from "react-icons/gi";
import { GiPowder } from "react-icons/gi";
import { BsPostcard } from "react-icons/bs";
import { PiFlagBannerFoldLight } from "react-icons/pi";
import { GiTomato } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(true);
  // console.log("Sidebar rendered");

  return (
    <div
      className={`fixed h-screen bg-white text-gray drop-shadow-xl z-[999] transition-all duration-300 ${
        isOpen ? "w-[16rem]" : "w-[4rem]"
      }`}
    >
      <IoIosArrowBack
        className={`absolute cursor-pointer -right-3 top-12 w-7 h-7 border-dark-purple
           border-2 rounded-full ${!isOpen && "rotate-180"}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* <img
        src={logo}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      /> */}
      <div className="flex font-medium border-b border-slate-300 py-3 mx-2.5">
        <Link to="/admin" className="flex flex-row justify-center">
          <img
            src={logo}
            alt=""
            width={60}
            className={`cursor-pointer duration-500 ${
              isOpen && "rotate-[360deg]"
            }`}
          />
          <span
            className={`py-3 text-xl whitespace-pre ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Lagim Dalat
          </span>
        </Link>
      </div>

      <div className="flex flex-col h-full">
        <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden overflow-y-auto">
          {isOpen && (
            <small className="pl-3 text-slate-500 inline-block mb-2">
              Content management
            </small>
          )}

          <li>
            <NavLink
              to="/admin/banner-management"
              className={({ isActive }) =>
                isActive ? "link font-bold" : "link"
              }
            >
              <PiFlagBannerFoldLight
                size={23}
                className="min-w-max hover:text-primary-color duration-300"
              />
              Banner
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/post-management" className="link">
              <BsPostcard
                size={23}
                className="min-w-max hover:text-primary-color duration-300"
              />
              Posts
            </NavLink>
          </li>

          <div className="border-y py-5 border-slate-300">
            {isOpen && (
              <small className="pl-3 text-slate-500 inline-block mb-2">
                Product management
              </small>
            )}

            <li>
              <NavLink to="/admin/vegetable-management" className="link">
                <GiTomato
                  size={23}
                  className="min-w-max hover:text-primary-color duration-300"
                />
                Vegetable
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/strawberry-management" className="link">
                <GiStrawberry
                  size={23}
                  className="min-w-max hover:text-primary-color duration-300"
                />
                Strawberry
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/powder-management" className="link">
                <GiPowder
                  size={23}
                  className="min-w-max hover:text-primary-color duration-300"
                />
                Dried cold powder
              </NavLink>
            </li>
          </div>

          {isOpen && (
            <small className="pl-3 text-slate-500 inline-block mb-2">
              Other management
            </small>
          )}

          <li>
            <NavLink to="/admin/user-management" className="link">
              <FiUser
                size={23}
                className="min-w-max hover:text-primary-color duration-300"
              />
              User
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/about-management" className="link">
              <GoPeople
                size={23}
                className="min-w-max hover:text-primary-color duration-300"
              />
              About us
            </NavLink>
          </li>

          {isOpen && (
            <small className="pl-3 text-slate-500 inline-block mb-2"></small>
          )}
          <div className="border-t py-5 border-slate-300">
            <li>
              <NavLink to="/admin/settings" className="link">
                <SlSettings
                  size={23}
                  className="min-w-max hover:text-primary-color duration-300"
                />
                Settings
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/logout" className="link">
                <MdOutlineLogout
                  size={23}
                  className="min-w-max hover:text-red-600 duration-300"
                />
                Log out
              </NavLink>
            </li>
          </div>
        </ul>
      </div>

      {/* <div
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block ${
          isOpen ? "" : "rotate-180"
        }`}
      >
        <IoIosArrowBack size={25} />
      </div> */}
    </div>
  );
};

export default Sidebar2;
