import React from "react";
import pic1 from '../../assets/images/charity-1.jpg'
import pic2 from '../../assets/images/charity-2.jpg'
import pic3 from '../../assets/images/charity-3.jpg'

const Charity = () => {
  return (
    <div className="m-4 md:mx-32 md:mt-12 text-justify">
      <div>
        <h1 className="text-2xl font-bold">Charity Activities</h1>
        <p className="mt-1">
          At Van Do Company, we’re committed to making a positive impact in our
          community. Our charity activities focus on providing support to those
          in need, fostering compassion, and promoting sustainable practices.
          Here are some of the key initiatives we undertake:
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-bold">Volunteer Days</h1>
        <p>
          We organize Volunteer Days where our team and community members come
          together to lend a helping hand. Whether it’s working at local farms,
          assisting in community centers, or participating in clean-up efforts,
          we believe that volunteering strengthens our community bonds and
          creates a positive ripple effect.
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-bold">Food and Clothing Donations</h1>
        <p>
          We are dedicated to supporting individuals and families facing
          difficult conditions. Through regular food drives and clothing
          donations, we provide essential items to those in need. Partnering
          with local shelters and organizations, we ensure that nutritious food
          and warm clothing reach the people who need them most.
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-bold">COVID-19 Response</h1>
        <p>
          During the COVID-19 pandemic, we stepped up our efforts to support our
          community. We organized initiatives to distribute essential food items
          to vulnerable populations and collaborated with local organizations to
          provide resources and support for those affected by the crisis. Our
          commitment to the health and well-being of our community remains a top
          priority.
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-bold">Get Involved</h1>
        <p>
          We welcome everyone to join us in our charitable efforts! Whether you
          want to volunteer your time, donate food or clothing, or support our
          initiatives, your involvement can help make a difference in the lives
          of those around us.
        </p>
      </div>
      <p className="mt-6 font-thin italic text-lg">
        Thank you for being part of Van Do Company’s mission to give back and
        create a brighter future for our community!
      </p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img src={pic1} className="w-full h-96 object-cover pt-5" alt=""/>
          <p className="text-base font-thin text-center">
            Hoat dong tinh nguyen
          </p>
        </div>

        <div>
          <img src={pic2} className="w-full h-96 object-cover pt-5" alt=""/>
          <p className="text-base font-thin text-center">
            Hoat dong tinh nguyen nguyen
          </p>
        </div>

        <div>
          <img src={pic3} className="w-full h-96 object-cover pt-5" alt=""/>
          <p className="text-base font-thin text-center">
            Hoat dong tinh nguyen nguyen nguyen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charity;
