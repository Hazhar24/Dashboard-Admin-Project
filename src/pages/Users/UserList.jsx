import { userRows } from "@/datas";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { DataUserList } from "@/data/DataUserList";

export default function UserList() {
  // const [userData,setUserData] = useState(userRows)
  return (
    <div className="UserListMain">
      <div className="UserListTop">
        <div className="UserListTopItem">{DataUserList.UserList[0].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[1].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[2].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[3].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[4].name}</div>
        <div className="UserListTopItem">{DataUserList.UserList[5].name}</div>
      </div>
      <div className="UserListUser">
        {userRows.map((item) => (
          <ul key={item.Id}>
            <li className="UserListLi">
              <span className="UserListItem">{item.Id}</span>
              <div className="UserListItem">
                <img src={item.avatar} className="UserListImg" alt="" />
                <span>{item.Username}</span>
              </div>
              <span className="UserListItem">{item.Email}</span>
              <span className="UserListItem">{item.status}</span>
              <span className="UserListItem">{item.transaction}</span>
              <div className="UserListItem">
                <button className="UserListButton">Edit</button>
                <MdDelete className="UserListIcon" />
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
