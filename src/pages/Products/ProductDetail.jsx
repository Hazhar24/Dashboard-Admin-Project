import React from "react";
import { useParams } from "react-router-dom";
import { DataProducts } from "@/datas";

function ProductDetail() {
  const params = useParams();
  const postId = parseInt(params.postID); // Convert the ID string to a number
  const product = DataProducts.find((item) => item.id === postId);
  
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="Details">
      <p className="NameItem">Name: {product.Name}</p>
      <p className="NameItem">Price: {product.Price}</p>
      <p className="NameItem">{product.Detail}</p>
      <p className="AboutItem">{product.About}</p>
      <img className="DetailIMG" src={product.Avatar} alt="ss" />
    </div>
  );
}

export default ProductDetail;