import React , {useState,useEffect} from "react";
import Hero from "../../components/hero";
import OurMenu from "../../components/ourmenu";
import OurChef from "../../components/ourChef";
import { Helmet } from "react-helmet";

const Home = () => {

  useEffect(()=>{
    console.log("home")
    window.addEventListener("scroll", ()=>{
     c
    });
  },[])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <OurChef />
      <OurMenu />
    </>
  );
};

export default Home;
