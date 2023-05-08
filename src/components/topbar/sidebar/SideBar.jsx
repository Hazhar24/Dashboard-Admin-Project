import {MdLineStyle} from '@react-icons/all-files/md/MdLineStyle'
import {MdTimeline} from '@react-icons/all-files/md/MdTimeline'
import {AiOutlineRise} from '@react-icons/all-files/ai/AiOutlineRise'
import { DataSideBar } from '../../../data/DataSideBar'
import {FiUser} from "@react-icons/all-files/fi/FiUser"
import {BiStoreAlt} from '@react-icons/all-files/bi/BiStoreAlt'
import {MdAttachMoney} from "@react-icons/all-files/md/MdAttachMoney"
import {BiBarChart} from "@react-icons/all-files/bi/BiBarChart"
import {FiMail} from "@react-icons/all-files/fi/FiMail"
import {RiFeedbackLine} from "@react-icons/all-files/ri/RiFeedbackLine"
import {BiMessage} from "@react-icons/all-files/bi/BiMessage"
import {FcManager} from "@react-icons/all-files/fc/FcManager"
import {MdReport} from "@react-icons/all-files/md/MdReport"

export default function SideBar() {
  return (
     <div className='SideBarMain'>
          <div>
               <h3 className="sideBar">{DataSideBar.SideBar[0].name}</h3>
               <ul className="SdideBarList">
                    <li className="sideBarListItem bg-gray-200"><p className='pr-2'><MdLineStyle /></p>{DataSideBar.SideBar[1].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><MdTimeline /></p>{DataSideBar.SideBar[2].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><AiOutlineRise /></p>{DataSideBar.SideBar[3].name}</li>
               </ul>
          </div>
          <div>
               <h3 className="sideBar">{DataSideBar.SideBar[4].name}</h3>
               <ul className="SdideBarList">
                    <li className="sideBarListItem"><p className='pr-2'><FiUser /></p>{DataSideBar.SideBar[5].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><FiUser /></p>{DataSideBar.SideBar[6].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><BiStoreAlt /></p>{DataSideBar.SideBar[7].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><MdAttachMoney /></p>{DataSideBar.SideBar[8].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><BiBarChart /></p>{DataSideBar.SideBar[9].name}</li>
               </ul>
          </div>
          <div>
               <h3 className="sideBar">{DataSideBar.SideBar[10].name}</h3>
               <ul className="SdideBarList">
                    <li className="sideBarListItem"><p className='pr-2'><FiMail /></p>{DataSideBar.SideBar[11].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><RiFeedbackLine /></p>{DataSideBar.SideBar[12].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><BiMessage /></p>{DataSideBar.SideBar[13].name}</li>
               </ul>
          </div>
          <div>
               <h3 className="sideBar">{DataSideBar.SideBar[14].name}</h3>
               <ul className="SdideBarList">
                    <li className="sideBarListItem"><p className='pr-2'><FcManager /></p>{DataSideBar.SideBar[15].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><MdTimeline /></p>{DataSideBar.SideBar[16].name}</li>
                    <li className="sideBarListItem"><p className='pr-2'><MdReport /></p>{DataSideBar.SideBar[17].name}</li>
               </ul>
          </div>
     </div>
  )
}
