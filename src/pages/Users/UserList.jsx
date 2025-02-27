import { userRows } from "@/datas";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { DataUserList } from "@/data/DataUserList";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);

  const userDelete = (id) => {
    setUserData((item) => {
      return item.filter(userData => userData.id !== id);
    });
  };

  return (
    <div className="user-list-main">
      <div className="user-list-top">
        <div className="user-list-top-item pl-10">
          {DataUserList.UserList[0].name}
        </div>
        <div className="user-list-top-item">{DataUserList.UserList[1].name}</div>
        <div className="user-list-top-item pl-5">
          {DataUserList.UserList[2].name}
        </div>
        <div className="user-list-top-item">{DataUserList.UserList[3].name}</div>
        <div className="user-list-top-item">{DataUserList.UserList[4].name}</div>
        <div className="user-list-top-item">{DataUserList.UserList[5].name}</div>
      </div>
      <div>
        {userData.map((item) => (
          <ul key={item.id}>
            <li className="user-list-li">
              <span className="user-list-item pl-10">{item.id}</span>
              <div className="user-list-item">
                <img src={item.avatar} className="user-list-img" alt="" />
                <span>{item.Username}</span>
              </div>
              <span className="user-list-item pl-5">{item.Email}</span>
              <span className="user-list-item">{item.status}</span>
              <span className="user-list-item">{item.transaction}</span>
              <div className="user-list-item">
                <MdDelete className="user-list-icon" onClick={() => userDelete(item.id)}/>
              </div>
            </li>
          </ul>
        ))}
        <div>
          <button>user add</button>
        </div>
      </div>
    </div>
  );
}
