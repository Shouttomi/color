import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexcolor }) => {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(",");

  const hexvalue = `#${hexcolor}`;

  useEffect(()=>{

    const timeout = setTimeout(()=>{

     
      setalert(false);
    },3000)

    return ()=>{clearTimeout(timeout)}
  },[alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setalert(true);
       navigator.clipboard.writeText(hexvalue)
       //setalert(false)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexvalue}</p>
      {alert && <p className="alert"> copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
