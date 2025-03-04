import { userRows } from "@/datas";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { DataUserList } from "@/data/DataUserList";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);
  const [showPopup, setShowPopup] = useState(false);
  const [newUser, setNewUser] = useState({
    id: userData.length + 1,
    Username: "",
    Email: "",
    status: "",
    transaction: "$ " + "",
    avatar: "",
  });

  const userDelete = (id) => {
    setUserData((item) => {
      return item.filter((userData) => userData.id !== id);
    });
  };

  const handleAddUser = () => {
    if (newUser.Username && newUser.Email) {
      setUserData([...userData, newUser]);
      setNewUser({
        id: userData.length + 2,
        Username: "",
        Email: "",
        status: "",
        transaction: "$ " + "",
        avatar: "", // Reset for next user
      });
      setShowPopup(false);
    }
  };

  return (
    <div className="users">
      <div className="user-list-main">
        <div className="user-list-top">
          <div className="user-list-top-item pl-10">
            {DataUserList.UserList[0].name}
          </div>
          <div className="user-list-top-item">
            {DataUserList.UserList[1].name}
          </div>
          <div className="user-list-top-item pl-5">
            {DataUserList.UserList[2].name}
          </div>
          <div className="user-list-top-item">
            {DataUserList.UserList[3].name}
          </div>
          <div className="user-list-top-item">
            {DataUserList.UserList[4].name}
          </div>
          <div className="user-list-top-item">
            {DataUserList.UserList[5].name}
          </div>
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
                  <MdDelete
                    className="user-list-icon"
                    onClick={() => userDelete(item.id)}
                  />
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="users-add">
        <button onClick={() => setShowPopup(true)}>+ user</button>
      </div>

      {/* Overlay for blur effect */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-backdrop" onClick={() => setShowPopup(false)} />
          <div className="popup-content">
            <h2>Add User</h2>
            <input
              type="text"
              placeholder="Username"
              value={newUser.Username}
              onChange={(e) =>
                setNewUser({ ...newUser, Username: e.target.value })
              }
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={newUser.Email}
              onChange={(e) =>
                setNewUser({ ...newUser, Email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Status"
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Transaction"
              value={newUser.transaction}
              onChange={(e) =>
                setNewUser({ ...newUser, transaction: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Avatar URL"
              value={newUser.avatar}
              onChange={(e) =>
                setNewUser({ ...newUser, avatar: e.target.value })
              }
            />
            <button className="popup-content-button" onClick={handleAddUser}>
              Add
            </button>
            <button
              className="popup-content-button"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
