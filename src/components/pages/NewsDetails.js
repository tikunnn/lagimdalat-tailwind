import React from "react";
import img from "../../assets/images/IMG_5718.jpg";
import BackButton from "../BackButton";

const NewsDetails = () => {
  return (
    <div className="mx-4 md:mx-32">
      <div className="mt-4">
        <BackButton/>

        <div className="md:grid md:grid-cols-5 md:gap-4 flex flex-col">
          <div className="col-start-1 col-end-4">
            <h1 className="text-3xl font-bold">What a beautiful!</h1>
            <p className="italic font-light text-base mt-1">October 18, 2024 - 20:05</p>

            <div className="mt-8">
              <img src={img} alt="" />
              <p className="font-thin text-sm text-center mt-3">The strawberry garden photo by Nguyen</p>
            </div>

            <div className="mt-4 space-y-4 font-normal text-justify">
              <p>
                Discovered a strawberry garden located in Da Lat. Some people
                said that this is a strawberry garden that is grown without
                chemicals or pesticides. These strawberries are grown naturally,
                carefully monitored and cared for regardless of the weather.
                Some people thought that these strawberries would not taste good
                or would be eaten by many worms, but surprisingly, these
                strawberries are very delicious and sweet instead.
              </p>
              <p>
                We were quite lucky today when we passed by and came across this
                strawberry garden and witnessed the farmers harvesting. When I
                approached and asked some questions, the farmers were very
                friendly and enthusiastic. They even invited me to eat the
                strawberries and even gave me these strawberries as a gift. I
                did not expect that people like that still exist on this earth.
              </p>

              <p>
                Anyway, I really appreciate their method of planting,
                monitoring, and harvesting because nowadays, most of the
                vegetables and fruits are grown under the influence of
                chemicals. We all know that chemical drugs are very harmful to
                our health. Health is everything, so let's join hands to build a
                world with clean agricultural products so that everyone can feel
                secure and have health to avoid all diseases.
              </p>
            </div>
          </div>

          <div className="col-start-5">
            <h1 className="text-xl font-bold">Other news</h1>

            <div className="my-5">
              <img src={img} alt="" />
              <h1 className="text-base font-bold mb-1">Go to the temple at the beginning of the year.</h1>
              <p className="text-sm font-light italic">Aug 23, 2024</p>
            </div>

            <div className="my-5">
              <img src={img} alt="" />
              <h1 className="text-base font-bold mb-1">Go to the temple at the beginning of the year.</h1>
              <p className="text-sm font-light italic">Aug 23, 2024</p>

            </div><div className="my-5">
              <img src={img} alt="" />
              <h1 className="text-base font-bold mb-1">Go to the temple at the beginning of the year.</h1>
              <p className="text-sm font-light italic">Aug 23, 2024</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
