import React, {lazy, Suspense,useState, useEffect, memo} from "react";
import "../App.css";
import { PacmanLoader } from "react-spinners";


const Header = lazy (() => import("../containers/header/Header"));

const Footer = lazy (() => import("../containers/footer/Footer"));
const NFT = lazy (() => import("../containers/nft/NFT"));
const Brand = lazy (() => import("../components/brand/Brand"));
const Navbar = lazy (() => import("../components/navbar/Navbar"));
const Casa = lazy (() => import("../pages/casa/Casa"));
const Homes = lazy (() => import("../pages/Homes/index.jsx"));
//const casa = lazy(() => import("../pages/casa/Casa"));


const Home = memo(() => {
  const  [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }
  , []);
  return (
    <Suspense fallback={<PacmanLoader color={"#FF385C"} margin={2} loading={loading} size={18} />}>
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
      <Homes/>
    <NFT />
    </div>
  </Suspense>
  );
});

export default Home;