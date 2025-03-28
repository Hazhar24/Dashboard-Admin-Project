import { useState } from "react";
import { useParams } from "react-router-dom";
import { DataProducts } from "@/datas";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductDetail() {
  const params = useParams();
  const postId = parseInt(params.postID); // Convert the ID string to a number
  const product = DataProducts.find((item) => item.id === postId);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handlePrevious = () => {
    setSelectedPhoto((prevPhoto) =>
      prevPhoto === 0 ? product.Avatar.length - 1 : prevPhoto - 1
    );
  };

  const handleNext = () => {
    setSelectedPhoto((prevPhoto) =>
      prevPhoto === product.Avatar.length - 1 ? 0 : prevPhoto + 1
    );
  };
  return (
    <div className="product-main">
      <div className="slider">
        {product?.Avatar && product.Avatar.length > 0 ? (
          <div className="slider-item">
            <Carousel
              selectedItem={selectedPhoto}
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              onChange={setSelectedPhoto}
            >
              {product.Avatar.map((photo, index) => (
                <div key={index}>
                  <img
                    className="slider-IMG"
                    src={photo}
                    alt={`Photo ${index}`}
                  />
                </div>
              ))}
            </Carousel>
            <div className="arrow-buttons">
              <button className="arrow-buttons-one" onClick={handlePrevious}>
                &lt;
              </button>
              <button className="arrow-buttons-one" onClick={handleNext}>
                &gt;
              </button>
            </div>
          </div>
        ) : (
          <p>No photos available</p>
        )}
      </div>
      <div className="details">
        <p className="name-item">Brand : {product.Name}</p>
        <p className="name-item">CPU Model : {product.CPU}</p>
        <p className="name-item">Ram Memory Installed : {product.Ram}</p>
        <p className="name-item">Hard Disk Size : {product.Hard}</p>
        <p className="name-item">Screen Size : {product.Size}</p>
        <p className="name-about">About : <br />{product.About}</p>
        <div className="item-price-buy">
          <p className="name-item button-price">Price: {product.Price}</p>
          <button className="name-item button-buy">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
