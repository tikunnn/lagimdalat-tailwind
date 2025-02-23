import React from "react";
import logo from "../assets/images/Logo3(N).png";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-32 bg-primary-color">
      <div className="py-2 lg:py-16 px-4 lg:grid lg:grid-cols-4 gap-8 text-black font-bold items-center">
        <div>
          <img src={logo} alt="logo" className="w-40 lg:w-56 m-auto md:ml-24" />
        </div>

        <div className="lg:col-span-3 flex justify-between text-sm">
          <div>
            <ul>
              <Link to="/about">
                <li className="my-8 cursor-pointer">ABOUT US</li>
              </Link>
              <Link to="/buying-guide">
                <li className="my-8 cursor-pointer">BUYING GUIDE</li>
              </Link>
              <Link to="/charity">
                <li className="my-8 cursor-pointer">CHARITY</li>
              </Link>
            </ul>
          </div>

          <div className="mt-8">
            <ul>
              <div className="mb-1">
                <li>FOLLOW US</li>
                <div className="flex flex-row text-2xl">
                  <a href="https://vi-vn.facebook.com/">
                    <FaFacebookSquare className="cursor-pointer text-lg" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FaSquareInstagram className="cursor-pointer text-lg" />
                  </a>
                  <a href="https://www.tiktok.com/explore">
                    <AiFillTikTok className="cursor-pointer text-lg" />
                  </a>
                  <a href="https://zalo.me/pc">
                    <SiZalo className="cursor-pointer text-xl" />
                  </a>
                </div>
              </div>
              <div className="mb-1">
                <li>CONTACT</li>
                <span className="text-xs font-normal">0843 52 79 52</span>
              </div>
              <div className="mb-1">
                <li>EMAIL</li>
                <span className="text-xs font-normal">pr0laAnh@gmail.com</span>
              </div>
            </ul>
          </div>

          <div className="mr-0 md:mr-32">
            <ul>
              <li className="mt-8">ADDRESS</li>
              <p className="font-normal mt-2">
                15 Tran Van Quang, Ward 10, Tan Binh District, Ho Chi Minh City
              </p>
              <li className="mt-8">TAX IDENTIFICATION NUMBER</li>
              <p className="font-normal mt-2">0315556792</p>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="flex justify-center text-center font-semibold p-2">
        Copyright © 2024 Van Do Vietnam Co., Ltd. All Rights Reserved
      </h3>
    </div>
  );
};

export default Footer;
