import { DataSideBar } from "@/data/DataSideBar";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { BiStoreAlt } from "@react-icons/all-files/bi/BiStoreAlt";
import { MdAttachMoney } from "@react-icons/all-files/md/MdAttachMoney";
import { BiBarChart } from "@react-icons/all-files/bi/BiBarChart";
import { Link } from "react-router-dom";

export default function QuickMenu() {
  return (
    <div>
      <div>
        <h3 className="sidebar">{DataSideBar.SideBar[4].name}</h3>
        <ul className="sdidebar-list">
          <Link to="/users">
            <li className="sidebar-list-item">
              <p className="sidebar-icon">
                <FiUser />
              </p>
              {DataSideBar.SideBar[5].name}
            </li>
          </Link>
          <Link to="/Products">
            <li className="sidebar-list-item">
              <p className="sidebar-icon">
                <BiStoreAlt />
              </p>
              {DataSideBar.SideBar[7].name}
            </li>
          </Link>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <MdAttachMoney />
            </p>
            {DataSideBar.SideBar[8].name}
          </li>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <BiBarChart />
            </p>
            {DataSideBar.SideBar[9].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
