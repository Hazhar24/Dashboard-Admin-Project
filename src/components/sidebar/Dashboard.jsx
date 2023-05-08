import { DataSideBar } from "@/data/DataSideBar";
import { MdLineStyle } from "@react-icons/all-files/md/MdLineStyle";
import { MdTimeline } from "@react-icons/all-files/md/MdTimeline";
import { AiOutlineRise } from "@react-icons/all-files/ai/AiOutlineRise";

export default function Dashboard() {
  return (
    <div>
      <div>
        <h3 className="sideBar">{DataSideBar.SideBar[0].name}</h3>
        <ul className="SdideBarList">
          <li className="sideBarListItem bg-gray-200">
            <p className="sideBarIcon">
              <MdLineStyle />
            </p>
            {DataSideBar.SideBar[1].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <MdTimeline />
            </p>
            {DataSideBar.SideBar[2].name}
          </li>
          <li className="sideBarListItem">
            <p className="sideBarIcon">
              <AiOutlineRise />
            </p>
            {DataSideBar.SideBar[3].name}
          </li>
        </ul>
      </div>
    </div>
  );
}
