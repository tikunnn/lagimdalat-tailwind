import React, { useState } from "react";
import { Link } from "react-router-dom";

import imgProduct from "../../assets/images//image.png";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from "../Slider/Slider";

import image1 from "../../assets/images/Food-Processing-Plant(English).png";
import image2 from "../../assets/images/Hotel - Restaurant - Supermarket (English).png";
import image3 from "../../assets/images/Catering-Meal(English).png";

const imagesProductPage = [image1, image2, image3];


const products = [
  { id: 1, name: "Product 1", price: "$100", image: imgProduct },
  { id: 2, name: "Product 2", price: "$200", image: imgProduct },
  { id: 3, name: "Product 3", price: "$300", image: imgProduct },
  { id: 4, name: "Product 4", price: "$400", image: imgProduct },
  { id: 5, name: "Product 5", price: "$500", image: imgProduct },
  { id: 6, name: "Product 6", price: "$600", image: imgProduct },
  { id: 7, name: "Product 7", price: "$700", image: imgProduct },
  { id: 8, name: "Product 8", price: "$800", image: imgProduct },
  { id: 9, name: "Product 9", price: "$900", image: imgProduct },
  { id: 10, name: "Product 10", price: "$1000", image: imgProduct },
  { id: 11, name: "Product 11", price: "$1000", image: imgProduct },
  { id: 12, name: "Product 12", price: "$1000", image: imgProduct },
  { id: 13, name: "Product 13", price: "$1000", image: imgProduct },
  { id: 14, name: "Product 14", price: "$1000", image: imgProduct },
  { id: 15, name: "Product 15", price: "$1000", image: imgProduct },
  { id: 16, name: "Product 16", price: "$1000", image: imgProduct },
  { id: 17, name: "Product 17", price: "$1000", image: imgProduct },
  { id: 18, name: "Product 18", price: "$1000", image: imgProduct },
  { id: 19, name: "Product 19", price: "$1000", image: imgProduct },
  { id: 20, name: "Product 20", price: "$1000", image: imgProduct },
  { id: 21, name: "Product 21", price: "$1000", image: imgProduct },
];

const Product = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, products.length));
  };

  const [isOpen, setIsOpen] = useState(false);
  const data = ["All", "Leaf greens", "Tubers"];
  const [selectedItem, setSelectedItem] = useState("All");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div>
      <Slider images={imagesProductPage}/>
      <div className="mt-8 bg-white">
        <div className="flex-col flex md:flex-row justify-center items-center">
          <div className="mb-5 md:mb-0 w-[70%] bg-white md:w-[577px] rounded-sm h-8 p-6 shadow-fm flex items-center mr-8">
            <FaSearch className="text-black text-opacity-45" />
            <input
              type="text"
              placeholder="Type something"
              className="bg-transparent border-none outline-none text-base md:text-xl ml-5 placeholder:text-gray-300 text-black w-full"
            />
          </div>

          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="w-36 h-12 cursor-pointer p-2 border-none shadow-fm flex items-center justify-between"
            >
              {selectedItem}
              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {isOpen && (
              <ul className="absolute left-0 top-full mt-1 bg-white border shadow-fm w-full z-10 shadow-lg">
                {data.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className="p-2 cursor-pointer hover:text-primary-color duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="m-8 md:mx-32 mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 text-black font-bold">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="flex-col cursor-pointer hover:scale-105 duration-300"
            >
              <Link to='/product-details'>
              <div className="w-full h-32 md:h-60 overflow-hidden mb-2 rounded bg-white shadow-fm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              </Link>
              <div>
                <h3 className="text-xs md:text-base">{product.name}</h3>
                <span className="text-xs md:text-base font-light italic">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="mt-4 float-end md:mr-32 m-8">
            <button
              onClick={handleLoadMore}
              className="text-black font-thin italic text-base "
            >
              See more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
