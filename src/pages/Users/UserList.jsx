import { userRows } from "@/datas";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

export default function UserList() {
  // const [userData,setUserData] = useState(userRows)
  return (
    <div className="UserListMain">
      <div className="UserListTop">
        <div className="UserListTopItem">ID</div>
        <div className="UserListTopItem">User</div>
        <div className="UserListTopItem">Email</div>
        <div className="UserListTopItem">Status</div>
        <div className="UserListTopItem">Transaction</div>
        <div className="UserListTopItem">Action</div>
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
