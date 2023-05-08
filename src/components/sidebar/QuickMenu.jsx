import { DataSideBar } from "@/data/DataSideBar";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { BiStoreAlt } from "@react-icons/all-files/bi/BiStoreAlt";
import { MdAttachMoney } from "@react-icons/all-files/md/MdAttachMoney";
import { BiBarChart } from "@react-icons/all-files/bi/BiBarChart";

export default function QuickMenu() {
  return (
    <div>
      <div>
        <h3 className="sideBar">{DataSideBar.SideBar[4].name}</h3>
        <ul className="SdideBarList">
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <FiUser />
            </p>
            {DataSideBar.SideBar[5].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <FiUser />
            </p>
            {DataSideBar.SideBar[6].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <BiStoreAlt />
            </p>
            {DataSideBar.SideBar[7].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <MdAttachMoney />
            </p>
            {DataSideBar.SideBar[8].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <BiBarChart />
            </p>
            {DataSideBar.SideBar[9].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
