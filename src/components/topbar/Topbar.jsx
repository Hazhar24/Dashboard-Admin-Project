import { DataTopbar } from "../../data/DataTopbar";
import {IoMdNotificationsOutline} from '@react-icons/all-files/io/IoMdNotificationsOutline'
import {MdLanguage} from '@react-icons/all-files/md/MdLanguage'
import {RiSettings5Line} from '@react-icons/all-files/ri/RiSettings5Line'

export default function TopBar() {
  return (
    <div className="TopBar">
      <div>
        <span className="TopBarLogo">{DataTopbar.Topbar[0].name}</span>
      </div>
      <div className="topbarRight">
        <div className="TopBarIcon">
          <IoMdNotificationsOutline />
          <span className="TopBarSpan">2</span>
        </div>
        <div className="TopBarIcon">
          <MdLanguage />
          <span className="TopBarSpan">2</span>
        </div>
        <div className="TopBarIcon">
          <RiSettings5Line />
        </div>
          <img className="TopBarImage" src="image/IMG2.jpg" alt="" />
      </div>
    </div>
  );
}
