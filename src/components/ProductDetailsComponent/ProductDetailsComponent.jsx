import { Col, Image, Row } from "antd";
import React from "react";
import imageproduct from "../../assets/images/text.png";
import imageproductsmall from "../../assets/images/textsmall.jpg";
import { WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import {StarFilled} from '@ant-design/icons'

const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height:'100%' }}>
      <Col span={10}>
        <Image src={imageproduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px",justifyContent: 'space-between'  }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14}>
        <WrapperStyleNameProduct>Sach tham tu lung danh conan - Combo 10 tap tu tap 81 den tap 90</WrapperStyleNameProduct>
        <div>
            <StarFilled style={{ fontSize:'12px',color:'rgb(253, 216, 54)'}} />
            <StarFilled style={{ fontSize:'12px',color:'rgb(253, 216, 54)'}} />
            <StarFilled style={{ fontSize:'12px',color:'rgb(253, 216, 54)'}} />
            <StarFilled style={{ fontSize:'12px',color:'rgb(253, 216, 54)'}} />
            <StarFilled style={{ fontSize:'12px',color:'rgb(253, 216, 54)'}} />
            <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
