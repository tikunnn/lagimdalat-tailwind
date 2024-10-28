import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/pages/About';
import Charity from './components/pages/Charity';
import Product from './components/pages/Product';
import Home from './components/pages/Home';
import ProductDetails from './components/pages/ProductDetails';
import NewsDetails from './components/pages/NewsDetails';
import BuyingGuide from './components/pages/BuyingGuide';


function App() {
  return (
    <>
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/charity' element={<Charity/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product-details' element={<ProductDetails/>}/>
        <Route path='/news-details' element={<NewsDetails/>}/>
        <Route path='/buying-guide' element={<BuyingGuide/>}/>
      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
