import { DataTopbar } from "../../data/DataTopbar";
import {IoMdNotificationsOutline} from '@react-icons/all-files/io/IoMdNotificationsOutline'
import {MdLanguage} from '@react-icons/all-files/md/MdLanguage'
import {RiSettings5Line} from '@react-icons/all-files/ri/RiSettings5Line'

export default function TopBar() {
  return (
    <div className="topbar">
      <div>
        <span className="btn">{DataTopbar.Topbar[0].name}</span>
      </div>
      <div className="topbarRight">
        <div className="iconBar">
          <IoMdNotificationsOutline />
          <span className="spanTop">2</span>
        </div>
        <div className="iconBar">
          <MdLanguage />
          <span className="spanTop">2</span>
        </div>
        <div className="iconBar">
          <RiSettings5Line />
        </div>
          <img className="imageBar" src="image/IMG2.jpg" alt="" />
      </div>
    </div>
  );
}
