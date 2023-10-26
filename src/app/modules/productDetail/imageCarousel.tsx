import React, { useState } from "react";
// import Popup from "reactjs-popup";
import "./imageCarousel.css";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [largeImageIndex, setLargeImageIndex] = useState(0);

  return (
    <>
      <div className="image-gallery">
        <div className="image-wrapper">
          {images.map((pic, index) => (
            <div key={index} className={`image-wrapper small`}>
              <img
                src={pic}
                alt="Mobile Phone"
                className="image small"
                onClick={() => setLargeImageIndex(index)}
              />
            </div>
          ))}
        </div>
        <div className="image-wrapper large">
          <img
            src={images[largeImageIndex]}
            alt={"phone"}
            className="image large"
          />
        </div>
      </div>
    </>
  );
};
export default ImageCarousel;
