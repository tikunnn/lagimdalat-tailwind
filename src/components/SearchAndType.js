import React, {useState} from "react";

import { FaSearch } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SearchAndType = ({setFilter}) => {
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
    </div>
  );
};

export default SearchAndType;
