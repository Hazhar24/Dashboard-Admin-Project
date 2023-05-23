import { DataSideBar } from "@/data/DataSideBar";
import {FiMail} from "@react-icons/all-files/fi/FiMail"
import {RiFeedbackLine} from "@react-icons/all-files/ri/RiFeedbackLine"
import {BiMessage} from "@react-icons/all-files/bi/BiMessage"

export default function Notfications() {
  return (
    <div>
      <div>
        <h3 className="sidebar">{DataSideBar.SideBar[10].name}</h3>
        <ul className="sdidebar-list">
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <FiMail />
            </p>
            {DataSideBar.SideBar[11].name}
          </li>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <RiFeedbackLine />
            </p>
            {DataSideBar.SideBar[12].name}
          </li>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <BiMessage />
            </p>
            {DataSideBar.SideBar[13].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
