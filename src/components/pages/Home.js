import React, { useEffect, useState } from "react";
import Slider from "../Slider";

import image1 from "../../assets/images/bannertest1.jpg";
import image2 from "../../assets/images/bannertest2.jpg";
// import image2 from "../../assets/images/Hotel - Restaurant - Supermarket (English).png";
// import imgPost from "../../assets/images/Logo3(N).png";
import { Link } from "react-router-dom";

const imagesPage1 = [image1, image2];

const Home = () => {
  const [news, setNews] = useState([]);

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, news.length));
  };

  //#region mockdata
  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })

      .then((data) => {
        // const news = data.products.getAll();
        // setNews(news);
        setNews(data.news);
      })
      .catch((error) => console.log("Error fetching news: ", error));
  }, []);
  //#endregion

  return (
    <div>
      <div className=" overflow-hidden">
        <Slider images={imagesPage1} />
      </div>

      <div className="ml-8 mt-2 font-bold text-2xl md:mt-8 md:ml-32">
        <h1>News</h1>
      </div>

      <div className="m-8 md:mx-32 mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black font-bold">
        {news.length === 0 ? (
          <p>No news available</p>
        ) : (
          news.slice(0, visibleCount).map((news) => (
            <Link to={`/news-details/${news.id_news}`} key={news.id_news}>
              <div
                key={news.id_news}
                className="flex-col cursor-pointer hover:scale-105 duration-300"
              >
                <div className="w-full h-24 md:h-60 overflow-hidden mb-2 rounded bg-white shadow-fm">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs md:text-xl">
                  <h3 className="text-base">{news.title}</h3>
                  <span className="font-light italic text-xs md:text-sm">
                    {news.dateTime}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      {/* {visibleCount < posts.length && ( */}
      {visibleCount < news.length && (
        <div className="m-4 float-end md:mr-32">
          <button
            onClick={handleLoadMore}
            className="text-black font-thin italic text-base"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
