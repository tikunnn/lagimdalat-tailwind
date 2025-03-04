// import React from "react";
// import logo from "../../assets/images/final trans 2.png";
// import { Link } from "react-router-dom";

// function Header() {
//   window.onload = () => {
//     const mobileMenuIcon = document.getElementById("mobile-menu-button");
//     mobileMenuIcon.addEventListener("click", () => {
//       if (mobileMenuIcon.classList.contains("open")) {
//         mobileMenuIcon.classList.remove("open");
//       } else {
//         mobileMenuIcon.classList.add("open");
//       }
//     });

//     const productsMenuIcon = document.getElementById("products-menu-item");
//     productsMenuIcon.addEventListener("click", () => {
//       if (productsMenuIcon.classList.contains("open")) {
//         productsMenuIcon.classList.remove("open");
//       } else {
//         productsMenuIcon.classList.add("open");
//       }
//     });
//   };

//   return (
//     <div>
//       <nav className="sticky top-0 z-20 flex bg-primary-color justify-between">
//         <div className="flex items-center">
//           <a>
//             <img
//               src={logo}
//               alt="logo"
//               className="w-20 mt-1 mb-3 ml-2 md:ml-32 md:w-32 cursor-pointer"
//             />
//           </a>
//         </div>

//         <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
//           <button id="mobile-menu-button" className="group peer">
//             <div className="top-0 h-1 w-8 bg-zinc-200 group-open:rotate-45 transition-all group-open:top-2 relative"></div>
//             <div className="h-1 w-8 bg-zinc-200 mt-1 group-open:opacity-0 opacity-100 transition-all"></div>
//             <div className="top-0 h-1 w-8 bg-zinc-200 mt-1 group-open:-rotate-45 transition-all group-open:-top-2 relative"></div>
//           </button>

//           <div className="absolute top-[70px] bg-primary-color w-full left-0 peer-open:block hidden">
//             <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-zinc-200 transition-colors hover:bg-white/10">
//               <span>Home</span>
//             </div>
//             <div
//               id="products-menu-item"
//               className="group relative h-full cursor-pointer items-center justify-center font-bold hover:bg-white/10"
//             >
//               <div className="p-4 text-center font-bold">Product</div>
//               <div className="hidden group-open:block">
//                 <div className="relative text-center p-4 font-thin hover:text-zinc-200">
//                   <span>Vegetable</span>
//                 </div>
//                 <div className="relative text-center p-4 font-thin hover:text-zinc-200">
//                   <span>Strawberry</span>
//                 </div>
//                 <div className="relative text-center p-4 font-thin hover:text-zinc-200">
//                   <span>Cold dried powder</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-zinc-200 transition-colors hover:bg-white/10">
//               <span>About us</span>
//             </div>
//           </div>
//         </div>

//         <div className="md:flex hidden flex-1 items-center justify-center">
//           <div className="menu-item mr-8">
//             <span>Home</span>
//           </div>

//           <div className="menu-item mr-8 group">
//             <span>Product</span>
//             <div className="group-hover:block absolute top-full hidden whitespace-nowrap rounded-md bg-secondary-color shadow md:shadow-fm">
//               <div className="sub-item">
//                 <span>Vegetable</span>
//               </div>
//               <div className="sub-item">
//                 <span>Strawberry</span>
//               </div>
//               <div className="sub-item">
//                 <span>Cold dried powder</span>
//               </div>
//             </div>
//           </div>

//           <div className="menu-item">
//             <span>About us</span>
//           </div>
//         </div>

//         <div className="md:flex hidden items-center">
//           <button className="w-16 h-9 mt-3 mb-3 mr-32 bg-white rounded-full">
//             EN
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/final trans 2.png";
import VN from "../assets/images/VietNam.png";
import EN from "../assets/images/English.png";

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled((prev) => !prev);
  };

  const languageImages = [VN, EN];

  window.onload = () => {
    const mobileMenuIcon = document.getElementById("mobile-menu-button");
    mobileMenuIcon.addEventListener("click", () => {
      if (mobileMenuIcon.classList.contains("open")) {
        mobileMenuIcon.classList.remove("open");
      } else {
        mobileMenuIcon.classList.add("open");
      }
    });

    const productsMenuIcon = document.getElementById("products-menu-item");
    productsMenuIcon.addEventListener("click", () => {
      if (productsMenuIcon.classList.contains("open")) {
        productsMenuIcon.classList.remove("open");
      } else {
        productsMenuIcon.classList.add("open");
      }
    });
  };

  const handleMunuItemClick = () => {
    setIsToggled(false);
  };

  return (
    <div>
      <nav className="sticky top-0 z-20 flex bg-primary-color justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 mt-1 mb-3 ml-2 md:ml-32 md:w-32 cursor-pointer"
            />
          </Link>
        </div>

        <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
          <button id="mobile-menu-button" className="group peer">
            <div className="top-0 h-1 w-8 bg-zinc-200 group-open:rotate-45 transition-all group-open:top-2 relative"></div>
            <div className="h-1 w-8 bg-zinc-200 mt-1 group-open:opacity-0 opacity-100 transition-all"></div>
            <div className="top-0 h-1 w-8 bg-zinc-200 mt-1 group-open:-rotate-45 transition-all group-open:-top-2 relative"></div>
          </button>

          <div className="absolute top-[70px] bg-primary-color w-full left-0 peer-open:block hidden">
            <Link
              to="/"
              className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-zinc-200 transition-colors hover:bg-white/10"
              onClick={handleMunuItemClick}
            >
              <div>Home</div>
            </Link>
            <div
              id="products-menu-item"
              className="group relative h-full cursor-pointer items-center justify-center font-bold hover:bg-white/10"
            >
              <div className="p-4 text-center font-bold">Product</div>
              <div className="hidden group-open:block">
                <Link
                  to="/vegetable-products"
                  className="relative block p-4 font-thin hover:text-zinc-200"
                  onClick={handleMunuItemClick}
                >
                  <div>Vegetable</div>
                </Link>
                <Link
                  to="/strawberry-products"
                  className="relative block p-4 font-thin hover:text-zinc-200"
                  onClick={handleMunuItemClick}
                >
                  <div>Strawberry</div>
                </Link>
                <Link
                  to="/cold-dried-powder-products"
                  className="relative block p-4 font-thin hover:text-zinc-200"
                  onClick={handleMunuItemClick}
                >
                  <div>Cold dried powder</div>
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-zinc-200 transition-colors hover:bg-white/10"
              onClick={handleMunuItemClick}
            >
              <div>About us</div>
            </Link>
          </div>
        </div>

        <div className="md:flex hidden flex-1 items-center justify-center">
          <Link to="/" className="menu-item mr-8" onClick={handleMunuItemClick}>
            <div>Home</div>
          </Link>

          <div className="menu-item mr-8 group">
            <div>Product</div>
            <div className="group-hover:block absolute top-full hidden whitespace-nowrap rounded-md bg-secondary-color shadow md:shadow-fm">
              <Link
                to="/vegetable-products"
                className="sub-item block p-2"
                onClick={handleMunuItemClick}
              >
                <div>Vegetable</div>
              </Link>
              <Link
                to="/strawberry-products"
                className="sub-item block p-2"
                onClick={handleMunuItemClick}
              >
                <div>Strawberry</div>
              </Link>
              <Link
                to="/cold-dried-powder-products"
                className="sub-item block p-2"
                onClick={handleMunuItemClick}
              >
                <div>Cold dried powder</div>
              </Link>
            </div>
          </div>

          <Link to="/about" className="menu-item">
            <div>About us</div>
          </Link>
        </div>

        {/* <div className="md:flex hidden items-center">
          <button className="w-16 h-9 mt-3 mb-3 mr-32 bg-white rounded-full">
            EN
          </button>
        </div> */}

        <div className="flex items-center mr-4 md:mr-32 justify-center">
          <button
            onClick={toggleButton}
            className={`relative w-20 h-10 rounded-full transition-all duration-300 border-[1px] border-green-900 bg-white`}
          >
            <div
              className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white transition-transform duration-300 ${
                isToggled ? "translate-x-10" : ""
              } flex items-center justify-center`}
            >
              <img
                src={languageImages[isToggled ? 1 : 0]}
                alt="toggle"
                className="w-full h-full rounded-full"
              />
              {/* <span
                className={`absolute text-black font-semibold transition-opacity duration-300 ${
                  isToggled ? "right-11 opacity-0" : "left-11 opacity-100"
                }`}
              >
                VN
              </span>
              <span
                className={`absolute text-black font-semibold transition-opacity duration-300 ${
                  isToggled ? "right-11 opacity-100" : "left-11 opacity-0"
                }`}
              >
                EN
              </span> */}
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
