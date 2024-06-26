import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import tiki2 from "../../assets/images/tiki2.png"
import tiki3 from "../../assets/images/tiki3.png"
import tiki4 from "../../assets/images/tiki4.png"
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import * as ProductService from '../../service/ProductService'
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Lap top"];
  const fetchProductAll = async () => {
   const res = await ProductService.getAllProduct()
   console.log("res",res)
   return res
  }
  const { isLoading, data: products } = useQuery({
    queryKey: ['product'],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000
  });
  console.log("products",products)
  return (
    <>
    <div style={{ width: '1270px', margin: '0 auto' }} >
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
    </div>
    <div style={{ width: '100%', backgroundColor: '#efefef', }}>
    <div id="container" style={{ height: '1065px', width: '1270px', margin: '0 auto' }}>
      <SliderComponent arrImages={[tiki2,tiki3,tiki4]} />
      <WrapperProducts>
        {products?.data?.map((products) => {
          return (
            <CardComponent
            key={products._id}
            countInStock={products.countInStock}
            description={products.description}
            image={products.image}
            name={products.name}
            price={products.price}
            rating={products.rating}
            type={products.type}
            selled={products.selled}
            discount={products.discount}
            id={products._id}
          />
          )
        })}
      </WrapperProducts>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <WrapperButtonMore textbutton="Xem Thêm" type="outline" styleButton={{
        border:"1px solid rgb(11, 116, 229)",color:'rgb(11, 116, 229)',width:'240px',height:'38px',borderRadius:'4px'
      }}/>
      </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
