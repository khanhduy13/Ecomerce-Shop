import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import tiki2 from "../../assets/images/tiki2.png"
import tiki3 from "../../assets/images/tiki3.png"
import tiki4 from "../../assets/images/tiki4.png"
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Lap top"];
  return (
    <>
    <div style={{padding:"0 120px"}} >
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
    </div>
    <div style={{padding:'0 120px', backgroundColor:'#efefef', height:"1000px"}}>
      <SliderComponent arrImages={[tiki2,tiki3,tiki4]} />
      <div style={{marginTop: "20px", display:'flex', alignItems:"center", gap:"20px"}}>
        <CardComponent />
      </div>
      <NavbarComponent></NavbarComponent>
      </div>
      
    </>
  );
};

export default HomePage;
