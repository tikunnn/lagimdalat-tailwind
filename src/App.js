// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import About from "./components/pages/About";
// import Charity from "./components/pages/Charity";
// import Product from "./components/pages/Product";
// import Home from "./components/pages/Home";
// import ProductDetails from "./components/pages/ProductDetails";
// import NewsDetails from "./components/pages/NewsDetails";
// import BuyingGuide from "./components/pages/BuyingGuide";
// import BannerManagement from "./admin/pages/BannerManagement";
// import PostManagement from "./admin/pages/PostManagement";
// import ProductManagement from "./admin/pages/ProductManagement";
// import UserManagement from "./admin/pages/UserManagement";
// import Settings from "./admin/pages/Settings";
// import AdminPage from "./admin/AdminPage";

// function App() {

//   return (
//     <>
//       <Router>
//         {!isAdminPath && <Header />}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/charity" element={<Charity />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/product-details" element={<ProductDetails />} />
//           <Route path="/news-details" element={<NewsDetails />} />
//           <Route path="/buying-guide" element={<BuyingGuide />} />

//           {/*----------------------------------------------*/}
//           <Route path="/admin" element={<AdminPage />} />
//           <Route
//             path="/admin/banner-management"
//             element={<BannerManagement />}
//           />
//           <Route path="/admin/post-management" element={<PostManagement />} />
//           <Route path="/product-management" element={<ProductManagement />} />
//           <Route path="/admin/user-management" element={<UserManagement />} />
//           <Route path="/admin/settings" element={<Settings />} />

//           {/* <AdminPage>
//             <Routes>
//               <Route path="/admin" element={<AdminPage />} />
//               <Route
//                 path="/admin/banner-management"
//                 element={<BannerManagement />}
//               />
//               <Route
//                 path="/admin/post-management"
//                 element={<PostManagement />}
//               />
//               <Route
//                 path="/product-management"
//                 element={<ProductManagement />}
//               />
//               <Route
//                 path="/admin/user-management"
//                 element={<UserManagement />}
//               />
//               <Route path="/admin/settings" element={<Settings />} />
//             </Routes>
//           </AdminPage> */}
//         </Routes>

//         {!isAdminPath && <Footer />}
//       </Router>
//     </>
//   );

//   const RouteHandler = () => {
//     const location = useLocation();
//   const isAdminPath = location.pathname.startsWith('/admin');

//   return (
//     <>
//       {!isAdminPath && <Header />}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/charity" element={<Charity />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/product-details" element={<ProductDetails />} />
//         <Route path="/news-details" element={<NewsDetails />} />
//         <Route path="/buying-guide" element={<BuyingGuide />} />

//         {/*----------------------------------------------*/}
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/admin/banner-management" element={<BannerManagement />} />
//         <Route path="/admin/post-management" element={<PostManagement />} />
//         <Route path="/product-management" element={<ProductManagement />} />
//         <Route path="/admin/user-management" element={<UserManagement />} />
//         <Route path="/admin/settings" element={<Settings />} />
//       </Routes>

//       {!isAdminPath && <Footer />}
//     </>
//   );
//   }
// }

// export default App;



import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Charity from "./components/pages/Charity";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import NewsDetails from "./components/pages/NewsDetails";
import BuyingGuide from "./components/pages/BuyingGuide";
import BannerManagement from "./admin/pages/BannerManagement";
import PostManagement from "./admin/pages/PostManagement";
import ProductManagement from "./admin/pages/ProductManagement";
import UserManagement from "./admin/pages/UserManagement";
import Settings from "./admin/pages/Settings";
import AdminPage from "./admin/AdminPage";
import VegetableProducts from "./components/pages/VegetableProducts";
import StrawberryProducts from "./components/pages/StrawberryProducts";
import { useEffect, useState } from "react";
import ColdDriedPowder from "./components/pages/ColdDriedPowder";


const App = () => {
  return (
    <div>
      <RouteHandler />
    </div>
  );
};

const RouteHandler = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin'); 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);

  return (
    <>
      {!isAdminPath && <Header />}
      {/* {isAdminPath && <AdminPage/>} */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/vegetable-products" element={<VegetableProducts />} />
        <Route path="/strawberry-products" element={<StrawberryProducts />} />
        <Route path="/cold-dried-powder-products" element={<ColdDriedPowder />} />

        <Route path="/product-details/:productId" element={<ProductDetails products={products} />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/buying-guide" element={<BuyingGuide />} />
        
        {/* ----------------------------------------------------- */}
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/admin/banner-management" element={<AdminPage><BannerManagement/></AdminPage>} />
        <Route path="/admin/post-management" element={<AdminPage><PostManagement/></AdminPage>} />
        <Route path="/admin/product-management" element={<AdminPage><ProductManagement /></AdminPage>} />
        <Route path="/admin/user-management" element={<AdminPage><UserManagement/></AdminPage>} />
        <Route path="/admin/settings" element={<AdminPage><Settings/></AdminPage>} />
      </Routes>

      {!isAdminPath && <Footer />}
    </>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
