import React from "react";

const ImageComponent = (props) => {
  console.log(props);
  const { images } = props;
  return images.map((item) => (
    <div>
      <img src={item.urls.regular} alt={item.alt_description}></img>
    </div>
  ));
};
export default ImageComponent;
