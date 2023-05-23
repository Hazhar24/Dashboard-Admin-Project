import { DataSideBar } from "@/data/DataSideBar";
import { MdTimeline } from "@react-icons/all-files/md/MdTimeline";
import { FcManager } from "@react-icons/all-files/fc/FcManager";
import { MdReport } from "@react-icons/all-files/md/MdReport";

export default function Staff() {
  return (
    <div>
      <div>
        <h3 className="sidebar">{DataSideBar.SideBar[14].name}</h3>
        <ul className="sdidebar-list">
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <FcManager />
            </p>
            {DataSideBar.SideBar[15].name}
          </li>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <MdTimeline />
            </p>
            {DataSideBar.SideBar[16].name}
          </li>
          <li className="sidebar-list-item">
            <p className="sidebar-icon">
              <MdReport />
            </p>
            {DataSideBar.SideBar[17].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
