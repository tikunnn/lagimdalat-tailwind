// import React, { useState, useEffect } from 'react';
// import image1 from "../../assets/images/Food-Processing-Plant(English).png";
// import image2 from "../../assets/images/Hotel - Restaurant - Supermarket (English).png";
// import image3 from "../../assets/images/Catering-Meal(English).png";

// const images = [
//     image1, image2, image3
// ];

// const Slider = () => {
//     const [active, setActive] = useState(0);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActive((prevActive) => (prevActive + 1) % images.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const handleNext = () => {
//         setActive((prevActive) => (prevActive + 1) % images.length);
//     };

//     const handlePrev = () => {
//         setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
//     };

//     const handleDotClick = (index) => {
//         setActive(index);
//     };

//     return (
//         <div className="relative w-full overflow-hidden">
//             <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${active * 100}%)` }}>
//                 {images.map((img, index) => (
//                     <div key={index} className="flex-shrink-0 w-full">
//                         <img src={img} alt="" className="w-full h-auto" />
//                     </div>
//                 ))}
//             </div>
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
//                 <button onClick={handlePrev} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full ml-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &lt; </button>
//             </div>
//             <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
//                 <button onClick={handleNext} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full mr-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &gt; </button>
//             </div>
//             <ul className="flex justify-center mt-2">
//                 {images.map((_, index) => (
//                     <li key={index} className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${active === index ? 'bg-green-800' : 'bg-gray-300'}`} onClick={() => handleDotClick(index)} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Slider;







// import React, { useState, useEffect } from 'react';


// const Slider = ({ images }) => {
//     const [active, setActive] = useState(0);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActive((prevActive) => (prevActive + 1) % images.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [images.length]);

//     const handleNext = () => {
//         setActive((prevActive) => (prevActive + 1) % images.length);
//     };

//     const handlePrev = () => {
//         setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
//     };

//     const handleDotClick = (index) => {
//         setActive(index);
//     };

//     return (
//         <div className="slider relative overflow-hidden">
//             <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${active * 100}%)` }}>
//                 {images.map((img, index) => (
//                     <div key={index} className="flex-shrink-0 w-full h-full">
//                         <img src={img} alt="" className="w-full h-full object-cover" />
//                     </div>
//                 ))}
//             </div>
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
//                 <button onClick={handlePrev} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full ml-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &lt; </button>
//             </div>
//             <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
//                 <button onClick={handleNext} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full mr-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &gt; </button>
//             </div>
//             <ul className="flex justify-center mt-2">
//                 {images.map((_, index) => (
//                     <li key={index} className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${active === index ? 'bg-green-800' : 'bg-gray-300'}`} onClick={() => handleDotClick(index)} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Slider;




// import React, { useState, useEffect } from 'react';

// const Slider = ({ images }) => {
//     const [active, setActive] = useState(0);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActive((prevActive) => (prevActive + 1) % images.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [images.length]);

//     const handleNext = () => {
//         setActive((prevActive) => (prevActive + 1) % images.length);
//     };

//     const handlePrev = () => {
//         setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
//     };

//     const handleDotClick = (index) => {
//         setActive(index);
//     };

//     return (
//         <div className="relative w-full h-full overflow-hidden">
//             <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${active * 100}%)` }}>
//                 {images.map((img, index) => (
//                     <div key={index} className="flex-shrink-0 w-full h-full">
//                         <img src={img} alt="" className="w-full h-full object-cover" />
//                     </div>
//                 ))}
//             </div>
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
//                 <button onClick={handlePrev} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full ml-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &lt; </button>
//             </div>
//             <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
//                 <button onClick={handleNext} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full mr-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &gt; </button>
//             </div>
//             <ul className="flex justify-center mt-2">
//                 {images.map((_, index) => (
//                     <li key={index} className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${active === index ? 'bg-green-800' : 'bg-gray-300'}`} onClick={() => handleDotClick(index)} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Slider;





// import React, { useState, useEffect } from 'react';
// const Slider = ({ images }) => {
//     const [active, setActive] = useState(0);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActive((prevActive) => (prevActive + 1) % images.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [images.length]);

//     const handleNext = () => {
//         setActive((prevActive) => (prevActive + 1) % images.length);
//     };

//     const handlePrev = () => {
//         setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
//     };

//     const handleDotClick = (index) => {
//         setActive(index);
//     };

//     return (
//         <div className="relative w-full h-full overflow-hidden">
//             <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${active * 100}%)` }}>
//                 {images.map((img, index) => (
//                     <div key={index} className="flex-shrink-0 w-full h-full">
//                         <img src={img} alt="" className="w-full h-full object-contain" />
//                     </div>
//                 ))}
//             </div>
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
//                 <button onClick={handlePrev} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full ml-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &lt; </button>
//             </div>
//             <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
//                 <button onClick={handleNext} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full mr-3 h-10 w-10 hover:bg-primary-color hover:text-white duration-300"> &gt; </button>
//             </div>
//             <ul className="flex justify-center mt-2">
//                 {images.map((_, index) => (
//                     <li key={index} className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${active === index ? 'bg-green-800' : 'bg-gray-300'}`} onClick={() => handleDotClick(index)} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Slider;



import React, { useState, useEffect } from 'react';


const Slider = ({ images }) => {
    const [active, setActive] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevActive) => (prevActive + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleNext = () => {
        setActive((prevActive) => (prevActive + 1) % images.length);
    };

    const handlePrev = () => {
        setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setActive(index);
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${active * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button onClick={handlePrev} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full ml-3 md:h-10 h-6 w-6 md:w-10 hover:bg-primary-color hover:text-white duration-300"> &lt; </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                <button onClick={handleNext} className="border-primary-color shadow-fm bg-white text-primary-color rounded-full mr-3 md:h-10 h-6 w-6 md:w-10 hover:bg-primary-color hover:text-white duration-300"> &gt; </button>
            </div>
            <ul className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <li key={index} className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${active === index ? 'bg-green-800' : 'bg-gray-300'}`} onClick={() => handleDotClick(index)} />
                ))}
            </ul>
        </div>
    );
};

export default Slider;

