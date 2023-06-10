import { DataSideBar } from "@/data/DataSideBar";
import { MdLineStyle } from "@react-icons/all-files/md/MdLineStyle";
import { MdTimeline } from "@react-icons/all-files/md/MdTimeline";
import { AiOutlineRise } from "@react-icons/all-files/ai/AiOutlineRise";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div>
        <h3 className="sidebar">{DataSideBar.SideBar[0].name}</h3>
        <ul className="sdidebar-list">
          <Link to="/">
            <li className="sidebar-list-item bg-gray-100">
              <p className="sidebar-icon">
                <MdLineStyle />
              </p>
              {DataSideBar.SideBar[1].name}
            </li>
          </Link>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <MdTimeline />
            </p>
            {DataSideBar.SideBar[2].name}
          </li>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <AiOutlineRise />
            </p>
            {DataSideBar.SideBar[3].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
