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
    <div className="UserListMain">
      <div className="UserListTop">
        <div className="UserListTopItem">{DataProduct.Products[0].name}</div>
        <div className="UserListTopItem">{DataProduct.Products[1].name}</div>
        <div className="UserListTopItem">{DataProduct.Products[2].name}</div>
        <div className="UserListTopItem">{DataProduct.Products[3].name}</div>
      </div>
      <div className="UserListUser">
        {userData.map((item) => (
          <ul key={item.id}>
            <li className="UserListLi">
              <Link className="UserListItem">{item.id}</Link>
              <div className="UserListItem">
                <img src={item.Avatar} className="UserListImg" alt="" />
                <span>{item.Name}</span>
              </div>
              <span className="UserListItem">{item.Price}</span>
              <div className="UserListItem">

                <Link to={`/product/${item.id}`}>
                  <button className="UserListButton">
                    {DataProduct.Products[4].name}
                  </button>
                </Link>
                
                <MdDelete className="UserListIcon" onClick={() => userDelete(item.id)}/>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
