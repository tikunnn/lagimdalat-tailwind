import React from "react";
import pic1 from "../../assets/images/aboutus-1.jpg";
import pic2 from "../../assets/images/aboutus-2.jpg";
import pic3 from "../../assets/images/aboutus-3.jpg";
import pic4 from "../../assets/images/aboutus-4.jpg";

const About = () => {
  return (
    <div className="md:mx-32 m-4 text-justify">
      <div className=" flex flex-col mt-12 md:flex-row">
        <div className="flex-col md:w-3/4 md:mr-32 md:flex-row ">
          <h1 className="text-4xl font-bold">Welcome to Van Do Company!</h1>
          <div className="mt-7">
            <p className="mt-5">
              At Van Do, we believe that everyone deserves access to clean,
              healthy agricultural products. Our mission is simple: to provide
              high-quality food that you can trust, free from pesticides and
              harmful chemicals. We understand the concerns many people have
              about the food they eat every day, and we’re here to offer a
              solution.
            </p>
            <p className="mt-5">
              We’re passionate about environmental protection and committed to
              sustainable practices. That’s why we say no to plastic and
              prioritize eco-friendly methods in all our operations. By choosing
              Van Do, you’re not just supporting your health; you’re also making
              a positive impact on the planet.
            </p>
            <p className="mt-5">
              Our team is dedicated to cultivating relationships with local
              farmers who share our vision of clean agriculture. We work closely
              with them to ensure that our products are not only safe but also
              delicious.
            </p>
            <p className="mt-5">
              Join us on our journey toward a healthier lifestyle and a cleaner
              environment. Together, we can make a difference—one meal at a
              time!
            </p>
            <p className="mt-5">
              Thank you for choosing Van Do Company. We’re excited to be part of
              your food journey!
            </p>
          </div>
        </div>
        <div className="w-40 h-full pt-4 md:w-96 m-auto">
          <img src={pic1} alt="abc" className="shadow-fm"/>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-2xl mt-14">Our programs and services</h2>
        <p>COVID-19 EMERGENGY FUND</p>
        <p>CHARITY</p>
        <p>VOLUNTEER DAYS</p>
      </div>

      {/* <div className="flex flex-col my-8 justify-between md:flex-row">
        <div className="m-auto w-full md:w-1/4">
          <img src={pic2} alt="asd" className="w-[375px] h-[368px] object-cover"/>
          <p className="text-base font-thin text-center">Hoc mot khoa chup anh tren Dutube (2022)</p>
        </div>
        <div className="m-auto w-full md:w-1/4">
          <img src={pic3} alt="zxc" className="w-[375px] h-[368px] object-cover"/>
          <p className="text-base font-thin text-center">Cuoc hoi ngo trong toilet (2023)</p>
        </div>
        <div className="m-auto w-full md:w-1/4">
          <img src={pic4} alt="asdf" className="w-[375px] h-[368px] object-cover "/>
          <p className="text-base font-thin text-center">Sieu cap vip pro photographer (2024)</p>
        </div>
      </div> */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div>
          <img src={pic2} className="w-full h-full object-cover" alt=""/>
          <p className="text-base font-thin text-center">
            Vuon rau sieu sach
          </p>
        </div>

        <div>
          <img src={pic3} className="w-full h-full object-cover" alt=""/>
          <p className="text-base font-thin text-center">
          Vuon rau sieu sieu sach
          </p>
        </div>

        <div>
          <img src={pic4} className="w-full h-full object-cover" alt=""/>
          <p className="text-base font-thin text-center">
          Vuon rau sieu sieu sieu sach
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
