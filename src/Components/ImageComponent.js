import React from "react";

const ImageComponent = (props) => {
  const { images } = props;
  return images.map((item) => (
    <div key={item.id}>
      <img src={item.urls.regular} alt={item.alt_description}></img>
    </div>
  ));
};
export default ImageComponent;
