import { DataWidgetSm } from "@/data/DataHomeWidget";
import {MdVisibility} from '@react-icons/all-files/md/MdVisibility'

export default function WidgetSm() {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">{DataWidgetSm.WidgetSm[0].title}</span>
      <ul className="WidgetSmList">
        <li className="WidgetSmItem">
          <img src="image/IMG2.jpg" alt="myImage" className="WidgetSmIMG" />
          <div className="WidgetSmUser">
            <span className="WidgetSmUserName">
              {DataWidgetSm.WidgetSm[1].name}
            </span>
            <span className="WidgetSmUserTitle">
              {DataWidgetSm.WidgetSm[2].skill}
            </span>
          </div>
          <button className="WidgetSmButton">
               <MdVisibility className="WidgetSmIcon" />
          </button>
        </li>
      </ul>
    </div>
  );
}
