import { Card } from "antd";
import styled from "styled-components"

export const WrapperCardStyle = styled(Card)`
    & img {
        height: 250px;
        width: 250px;
    },
    position: relative;
    
`
export const WrapperImageStyle = styled.img`
    top:-1px;
    left:-1px;
    position:absolute;
    height: 14px !important;
    width: 68px !important;
`

export const StyleNameProduct = styled.div`
    font-weight:400;
    font-size:12px;
    line-height:16px;
    color: rgb(36, 36, 36);

`
export const WrapperReportText = styled.div`
    font-size:11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`
export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    margin:6px 0 0px;
`
export const WrapperPriceDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`
