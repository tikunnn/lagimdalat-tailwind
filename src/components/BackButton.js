import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'


const BackButton = () => {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <div>
        <button onClick={handleBack} className="text-4xl text-secondary-color cursor-pointer">
        <IoArrowBackCircleOutline className="hover:text-green-800 duration-300"/>
      </button>
    </div>
  )
}

export default BackButton;