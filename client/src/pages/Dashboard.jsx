import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "../components/Carousel/Carousel";
import css from "../components/Editor/editor.module.css";
import { Editor } from "../components/Editor/Editor";
export const Dashboard = () => {
  const [ref, setRef] = useState(useRef(null));

  const toInitialComponent = () => {
    const setStyle = ref.current.style;

    const styles = {
      // backgroundColor: "rgb(106, 79, 186)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20rem",
      height: "20rem",
      borderRadius: "1rem",
      "@media (minWidth: 1000px)": {
        backgroundColor: "red",
      },
    };

    for (const style in styles) {
      setStyle[style] = styles[style];
    }
  };

  const onClick = (color) => {
    const setStyle = ref.current.style;

    const styles = {
      backgroundColor: color,
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      width: "20rem",
      height: "20rem",
      borderRadius: "1rem",
    };

    for (const style in styles) {
      setStyle[style] = styles[style];
    }
  };

  useEffect(() => {
    // if (ref || ref.current) toInitialComponent();
  }, []);

  return (
    <div className="dashboard">
      <Carousel myRef={ref} style={{}} />
      <div className={css.editor}>
        <Editor />
      </div>
    </div>
  );
};
