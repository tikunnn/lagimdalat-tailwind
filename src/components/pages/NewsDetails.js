import React from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../BackButton";

const NewsDetails = ({ news, onClose }) => {
  const { id_news } = useParams();

  const newss = news.find((n) => n.id_news === parseInt(id_news, 10));
  if (!newss) {
    return <h1>Không có tin nào</h1>;
  }

  const otherNews = news.filter((n) => n.id_news !== parseInt(id_news, 10));
  const shuffledNews = otherNews.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="mx-4 md:mx-32">
      <div className="mt-4">
        <BackButton onClick={onClose} />

        {newss ? (
          <div className="md:grid md:grid-cols-5 md:gap-4 flex flex-col">
            <div className="col-start-1 col-end-4">
              <h1 className="text-3xl font-bold">{newss.title}</h1>
              <p className="italic font-light text-base mt-1">
                {newss.dateTime}
              </p>

              <div className="mt-8">
                <img src={newss.image} alt={newss.title} />
                <p className="font-normal text-sm text-left mt-3">
                  {newss.description}
                </p>
              </div>

              <div className="mt-4 space-y-4 font-normal text-justify">
                <p>{newss.content}</p>
              </div>
            </div>

            <div className="col-start-5">
              <h1 className="text-xl font-bold">Other news</h1>

              {shuffledNews.slice(0, 3).map((item) => (
                <div key={item.id_news} className="h-64">
                  <Link to={`/news-details/${item.id_news}`}>
                    <div key={item.id_news} className="my-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 shadow-fm w-full object-cover"
                      />
                      <h1 className="text-base font-bold mb-1">{item.title}</h1>
                      <p className="text-sm font-light italic">
                        {item.dateTime}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading news details...</p>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
