import { DataTopbar } from "@/data/DataTopbar";
import { IoMdNotificationsOutline } from "@react-icons/all-files/io/IoMdNotificationsOutline";
import { MdLanguage } from "@react-icons/all-files/md/MdLanguage";
import { RiSettings5Line } from "@react-icons/all-files/ri/RiSettings5Line";

export default function TopBar() {
  return (
    <div className="topbar">
      <div>
        <span className="topbar-logo">{DataTopbar.Topbar[0].name}</span>
      </div>
      <div className="topbar-right">
        <div className="topbar-icon">
          <IoMdNotificationsOutline />
          <span className="topbar-span">2</span>
        </div>
        <div className="topbar-icon">
          <MdLanguage />
          <span className="topbar-span">2</span>
        </div>
        <div className="topbar-icon">
          <RiSettings5Line />
        </div>
        <img className="topbar-image" src="image/IMG6.jpg" alt="myImage" />
      </div>
    </div>
  );
}
