import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "../Slider";

import image1 from "../../assets/images/IMG_5707.jpg";
import image2 from "../../assets/images/IMG_5718.jpg";

// import image1 from "../../assets/images/bannertest1.jpg";
// import image2 from "../../assets/images/bannertest2.jpg";

import SearchAndType from "../SearchAndType";
import ProductDetails from "./ProductDetails";

const imagesProductPage = [image1, image2];

const StrawberryProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const strawberryProducts = data.products.filter(
          (product) => product.id_category === 2
        );
        setProducts(strawberryProducts);
      })
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  };

  const handleProductClick = (id) => {
    setSelectedProductId(id);
  };

  if (selectedProductId) {
    return (
      <ProductDetails
        products={products}
        selectedProductId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
      />
    );
  }

  return (
    <div>
      <div>
        <Slider images={imagesProductPage} />
      </div>
      <div className="mt-8 bg-white">
        <SearchAndType />

        <div className="m-8 md:mx-32 mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black font-bold">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id_product}
              className="flex-col cursor-pointer hover:scale-105 duration-300"
              onClick={() => handleProductClick(product.id_product)}
            >
              <Link to={`/product-details/${product.id_product}`}>
                <div className="w-full h-32 md:h-60 overflow-hidden mb-2 rounded bg-white shadow-fm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div>
                <h3 className="text-xs md:text-base">{product.name}</h3>
                <span className="text-xs md:text-base font-light italic">
                  {product.price}
                </span>
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

export default StrawberryProducts;
