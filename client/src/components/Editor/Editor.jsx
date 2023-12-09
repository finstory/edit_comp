import React, { useEffect } from "react";
import css from "./editor.module.css";
import axios from "axios";

export const Editor = () => {
  const editClass = () => {
    axios.post("http://localhost:3001/test", {
      // props: "border-radius: 2rem;",
      // props: "background-color: rgb(137, 172, 226);",
      class_name: "carousel",
      css_list: [
        { name: "width", value: "23rem" },
        { name: "height", value: "20rem" },
        { name: "display", value: "flex" },
        { name: "justify-content", value: "center" },
        { name: "align-items", value: "center" },
        { name: "background-color", value: "#45ba97" },
        { name: "border-radius", value: "2rem" },
        { name: "opacity", value: "1" },
      ],
    });
  };

  useEffect(() => {
    editClass();
  });

  return (
    <div className={css.editor}>
      <button onClick={editClass}>edita</button>
    </div>
  );
};
