import React from 'react';
import Navbar from './componentes/navbar/Navbar';
import Hero from './componentes/Hero/Hero';
import Category from './componentes/Category/Category';
import Category2 from './componentes/Category/Category2';
import Services from './componentes/services/Services';
import Banner from './componentes/Banner/Banner';
import headphone from "./assets/hero/headphone.png";
import Products from './componentes/Products/Products';
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from './componentes/Blogs/Blogs';
import Partners from './componentes/Partners/Partners';
import Footer from './componentes/Footer/Footer';
import Popup from './componentes/Popup/Popup';




const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
}

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

    return <div className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}/>
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>

};
export default App;