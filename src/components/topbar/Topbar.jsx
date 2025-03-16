import { DataTopbar } from "@/data/DataTopbar";
import { IoMdNotificationsOutline } from "@react-icons/all-files/io/IoMdNotificationsOutline";
import { MdLanguage } from "@react-icons/all-files/md/MdLanguage";
import { RiSettings5Line } from "@react-icons/all-files/ri/RiSettings5Line";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="topbar">
      <div>
        <span className="topbar-logo">{DataTopbar.Topbar[0].name}</span>
      </div>
      <div className="topbar-right">
        <button className="topbar-icon">
          <IoMdNotificationsOutline />
          <span className="topbar-span">2</span>
        </button>
        <button className="topbar-icon">
          <MdLanguage />
          <span className="topbar-span">2</span>
        </button>
        <button className="topbar-icon">
          <RiSettings5Line />
        </button>
        <button>
          <Link to={'/Profile'}>
            <img className="topbar-image" src="image/IMG6.jpg" alt="myImage" />
          </Link>
        </button>
      </div>
    </div>
  );
}
