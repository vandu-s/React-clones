import React, { useState } from "react";
import farmImgbig1 from "./images/image-farm-1@3x.png";
import farmImgbig2 from "./images/image-farm-2@3x.png";
import farmImgbig3 from "./images/image-farm-3@3x.png";
import farmImgsmall1 from "./images/image-farm-1.png";
import farmImgsmall2 from "./images/image-farm-2.png";
import farmImgsmall3 from "./images/image-farm-3.png";

import "./App.css";

const imageArray = [
  {
    id: 1,
    imageBig: farmImgbig1,
    imageSmall: farmImgsmall1,
  },
  {
    id: 2,
    imageBig: farmImgbig2,
    imageSmall: farmImgsmall2,
  },
  {
    id: 3,
    imageBig: farmImgbig3,
    imageSmall: farmImgsmall3,
  },
  {
    id: 2,
    imageBig: farmImgbig2,
    imageSmall: farmImgsmall2,
  },
];
const ImageViewer = () => {
  const [bigImgSrc, setBigImgSrc] = useState(farmImgbig1);

  const handleImageChange = (bigImgSrcValue) => {
    setBigImgSrc(bigImgSrcValue);
  };

  return (
    <>
      <div className="image_warpper">
        <div className="img-box">
          <img src={bigImgSrc} alt="farmImgBig" />
        </div>
      </div>
      <div className="small_imgs_container">
        <div className="small_img_wrapper">
          {imageArray.map((item) => {
            return (
              <img
                src={item.imageSmall}
                alt="farmImgBismall"
                onClick={() => handleImageChange(item.imageBig)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
