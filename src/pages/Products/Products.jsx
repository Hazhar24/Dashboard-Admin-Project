import { DataProducts } from "@/datas";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { DataProduct } from "@/data/DataProducts";
import { Link } from "react-router-dom";

export default function Products() {
  const [userData, setUserData] = useState(DataProducts);
  const userDelete = (id) => {
    setUserData((item) => {
      return item.filter((userData) => userData.id !== id);
    });
  };
  return (
    <div className="user-list-main">
      <div className="user-list-top">
        <div className="user-list-top-item">{DataProduct.Products[0].name}</div>
        <div className="user-list-top-item">{DataProduct.Products[1].name}</div>
        <div className="user-list-top-item">{DataProduct.Products[2].name}</div>
        <div className="user-list-top-item">{DataProduct.Products[3].name}</div>
      </div>
      <div>
        {userData.map((item) => (
          <ul key={item.id}>
            <li className="user-list-li">
              <Link className="user-list-item">{item.id}</Link>
              <div className="user-list-item">
                <img src={item.img} className="user-list-img" alt="" />
                <span>{item.Name}</span>
              </div>
              <span className="user-list-item">{item.Price}</span>
              <div className="user-list-item">
                <Link to={`/product/${item.id}`}>
                  <button className="user-list-button">
                    {DataProduct.Products[4].name}
                  </button>
                </Link>
                <MdDelete className="user-list-icon" onClick={() => userDelete(item.id)}/>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
