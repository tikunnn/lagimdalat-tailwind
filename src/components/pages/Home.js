import React, { useEffect, useState } from "react";
import Slider from "../Slider";

import image1 from "../../assets/images/bannertest1.jpg";
import image2 from "../../assets/images/bannertest2.jpg";
// import image2 from "../../assets/images/Hotel - Restaurant - Supermarket (English).png";
// import imgPost from "../../assets/images/Logo3(N).png";
import { Link } from "react-router-dom";

const imagesPage1 = [image1, image2];

// const posts = [
//   { id: 1, name: "Title 1", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 2, name: "Title 2", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 3, name: "Title 3", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 4, name: "Title 4", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 5, name: "Title 5", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 6, name: "Title 6", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 7, name: "Title 7", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 8, name: "Title 8", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 9, name: "Title 9", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 10, name: "Title 10", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 11, name: "Title 11", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 12, name: "Title 12", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 13, name: "Title 13", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 14, name: "Title 14", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 15, name: "Title 15", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 16, name: "Title 16", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 17, name: "Title 17", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 18, name: "Title 18", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 19, name: "Title 19", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 20, name: "Title 20", dateTime: "Aug 23, 2024", image: imgPost },
//   { id: 21, name: "Title 21", dateTime: "Aug 23, 2024", image: imgPost },
// ];

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
        const news = data.products.getAll();
        setNews(news);
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

      <div className="m-8 md:mx-32 mt-3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 text-black font-bold">
        {news.slice(0, visibleCount).map((news) => (
          <Link to="news-details">
            <div
              key={news.id_news}
              className="flex-col cursor-pointer hover:scale-105 duration-300"
            >
              <div className="w-full h-24 md:h-60 overflow-hidden mb-2 rounded bg-white shadow-fm">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-contain"
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
        ))}
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
