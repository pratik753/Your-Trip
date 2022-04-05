import classes from "./home.module.css";
import React from "react";
import img1 from "../../assets/bg-image-8-1.webp";
const ImageCard = () => {
  return (
    <div>
      <img src={img1} height={300} width={300} className={classes.imagePic} />{" "}
    </div>
  );
};

export default ImageCard;
