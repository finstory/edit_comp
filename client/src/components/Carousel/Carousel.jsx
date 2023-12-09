import React, { useEffect } from "react";
import css from "./carousel.module.css";
export const Carousel = ({ myRef, style }) => {


  return (
    <div className={css.carousel}>
      <div
        style={{
          width: "30%",
          height: "30%",
          backgroundColor: "#452a9c",
        }}
      ></div>
    </div>
  );
};
