import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import BackButton from "../BackButton";

const ProductDetails = ({ products, onClose }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const { productId } = useParams();
  const product = products.find(
    (p) => p.id_product === parseInt(productId, 10)
  );

  const otherProducts = products.filter(
    (n) => n.id_product !== parseInt(productId, 10)
  );

  if (!product) {
    return <h1>Không có sản phẩm nào</h1>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  };

  return (
    <div className="md:mx-32 md:mt-4 mt-2">
      <BackButton onClick={onClose} />

      <div className="mt-2 md:mt-7 flex-row md:grid md:grid-cols-3 gap-4">
        <div className="col-start-1">
          <img
            src={product.image}
            alt={product.name}
            className="shadow-fm w-[400px] h-72 object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-8 ml-2 col-start-2 col-end-4">
          <div>
            <h1 className="font-bold text-xl">{product.name}</h1>
            <p className="font-light text-base italic">{product.price}</p>
          </div>
          <div>
            <h1 className="text-lg font-medium mt-8">Storage instructions</h1>
            <span className="italic text-base">{product.description}</span>
          </div>

          <a href="https://zalo.me/pc">
            <button className="bg-secondary-color p-2 mt-4 rounded-[4px] hover:bg-primary-color duration-300">
              Contact us
            </button>
          </a>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mt-12 p-2">Other products</h1>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 text-black font-bold">
        {otherProducts.slice(0, visibleCount).map((otherProduct) => (
          <div
            key={otherProduct.id_product}
            className="flex-col cursor-pointer hover:scale-105 duration-300"
          >
            <Link to={`/product-details/${otherProduct.id_product}`}>
              <div className="w-full h-32 md:h-60 overflow-hidden mb-2 rounded bg-white shadow-fm">
                <img
                  src={otherProduct.image}
                  alt={otherProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div>
              <h3 className="text-xs md:text-base">{otherProduct.name}</h3>
              <span className="text-xs md:text-base font-light italic">
                {otherProduct.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < otherProducts.length && (
        <div className="mt-4 float-end p-2">
          <button
            onClick={handleLoadMore}
            className="text-black font-thin italic text-base "
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
