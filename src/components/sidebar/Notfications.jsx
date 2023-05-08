import { DataSideBar } from "@/data/DataSideBar";
import {FiMail} from "@react-icons/all-files/fi/FiMail"
import {RiFeedbackLine} from "@react-icons/all-files/ri/RiFeedbackLine"
import {BiMessage} from "@react-icons/all-files/bi/BiMessage"

export default function Notfications() {
  return (
    <div>
      <div>
        <h3 className="sideBar">{DataSideBar.SideBar[10].name}</h3>
        <ul className="SdideBarList">
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <FiMail />
            </p>
            {DataSideBar.SideBar[11].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <RiFeedbackLine />
            </p>
            {DataSideBar.SideBar[12].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <BiMessage />
            </p>
            {DataSideBar.SideBar[13].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
