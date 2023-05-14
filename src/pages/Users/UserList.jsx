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
    <div className="UserListMain">
      <div className="UserListTop">
        <div className="UserListTopItem pl-10">
          {DataUserList.UserList[0].name}
        </div>
        <div className="UserListTopItem">{DataUserList.UserList[1].name}</div>
        <div className="UserListTopItem pl-5">
          {DataUserList.UserList[2].name}
        </div>
        <div className="UserListTopItem">{DataUserList.UserList[3].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[4].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[5].name}</div>
      </div>
      <div className="UserListUser">
        {userData.map((item) => (
          <ul key={item.id}>
            <li className="UserListLi">
              <span className="UserListItem pl-10">{item.id}</span>
              <div className="UserListItem">
                <img src={item.avatar} className="UserListImg" alt="" />
                <span>{item.Username}</span>
              </div>
              <span className="UserListItem pl-5">{item.Email}</span>
              <span className="UserListItem">{item.status}</span>
              <span className="UserListItem">{item.transaction}</span>
              <div className="UserListItem">
                <button className="UserListButton">
                  {DataUserList.UserList[6].name}
                </button>
                <MdDelete className="UserListIcon" onClick={() => userDelete(item.id)}/>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
