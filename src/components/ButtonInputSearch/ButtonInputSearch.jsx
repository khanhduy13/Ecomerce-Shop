import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponents from "../InputComponents/InputComponents";
import ButtonComponents from "../ButtonComponents/ButtonComponents";

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton,
     backgroundColor ="#fff", 
     backgroundButtonColor ="blue", 
     border = "none", 
     borderRadius = "0", 
     color= "#fff"} 
     = props;
  return (
    <div style={{ display:"flex" }}>
      <InputComponents
        size={size}
        placeholder={placeholder}
        style={{ border: border, borderRadius: borderRadius, backgroundColor: backgroundColor }}
      />
      <ButtonComponents
        size={size}
        icon={<SearchOutlined />}
        styleButton={{ border: border, borderRadius: borderRadius,backgroundColor: backgroundButtonColor, color: color  }}
        textButton={textButton}
      />
        
    </div>
  );
};

export default ButtonInputSearch;
