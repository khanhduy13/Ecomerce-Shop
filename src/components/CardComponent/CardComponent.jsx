import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperImageStyle,
  WrapperPriceDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from '../../assets/images/logo.png'


const cardComponent = () => {
  return (
    <WrapperCardStyle
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80        "
        />
      }
    >
      <WrapperImageStyle src={logo} alt="logo" />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: '4px'}}>
          <span>4.5</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span>| Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ
        <span>
          <WrapperPriceDiscountText>-5%</WrapperPriceDiscountText>
        </span>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default cardComponent;
