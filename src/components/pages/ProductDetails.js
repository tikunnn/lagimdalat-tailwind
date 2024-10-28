import React from "react";
import imgProduct from "../../assets/images/image.png";
import BackButton from "../BackButton";

const ProductDetails = () => {
  return (
    <div className="md:mx-32 md:mt-4 mt-2">
      <BackButton/>

      <div className="mt-2 md:mt-7 flex-row md:grid md:grid-cols-3 gap-4">
        <div className="col-start-1">
          <img
            src={imgProduct}
            alt=""
            className="shadow-fm w-[400px] h-72 object-contain"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-8 ml-2 col-start-2 col-end-4">
          <div>
            <h1 className="font-bold text-xl">Carrot</h1>
            <p className="font-light text-base italic">20.000đ</p>
          </div>
          <div>
            <h1 className="text-lg font-medium mt-8">Storage instructions</h1>
            <span className="italic text-base">
              Hand-peeled carrots and baby carrots have a higher risk of drying
              out once their protective outer layer is removed. When storing
              peeled carrots, you'll need to provide moisture to prevent them
              from cracking, turning white, and drying out. Using this method,
              peeled carrots will last up to 3 weeks. Wash carrots with cool
              water. Add cool water to a dish or airtight container. Add the
              carrots to the container, making sure they are completely covered
              with water. If you don't plan to eat the carrots within a few
              days, you will need to periodically change out the water to
              inhibit bacterial growth. Rinse the carrots and replace the water
              every 4–5 days. Just before eating, rinse the carrots again to
              remove any potential bacterial growth.
            </span>
          </div>
          <a href="https://zalo.me/pc">
            <button className="bg-secondary-color p-2 mt-4 rounded-[4px] hover:bg-primary-color duration-300">
              Contact us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
