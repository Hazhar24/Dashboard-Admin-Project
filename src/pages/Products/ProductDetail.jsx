import React from "react";
import { useParams } from "react-router-dom";
import { DataProducts } from "@/datas";

function ProductDetail() {
  const params = useParams();
  console.log(typeof params);

  {DataProducts.find((item) => item.id === params.postID)}
  console.log(DataProducts);

  return <div>main post : </div>;
}
export default ProductDetail;
