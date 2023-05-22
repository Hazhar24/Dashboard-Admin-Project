import React from "react";
import { useParams } from "react-router-dom";
import { DataProducts } from "@/datas";

function ProductDetail() {
  const params = useParams();
  const postId = parseInt(params.postID); // Convert the ID string to a number
  const product = DataProducts.find((item) => item.id === postId);
  return (
    <div className="Details">
      <p className="NameItem">Name : {product ? product.Name : "Not found"}</p>
      <p className="NameItem">Price : {product ? product.Price : "Not found"}</p>
      <p className="NameItem">{product ? product.Detail : "Not found"}</p>
      <p className="AboutItem">{product ? product.About : "Not found"}</p>
    </div>
  )
}

export default ProductDetail;
