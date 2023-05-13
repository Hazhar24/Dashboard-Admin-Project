import { DataWidgetSm } from "@/data/DataHomeWidget";
import { MdVisibility } from "@react-icons/all-files/md/MdVisibility";
import { NewMembers } from "@/datas1";

export default function WidgetSm() {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">{DataWidgetSm.WidgetSm[0].title}</span>
      <ul className="WidgetSmList">
        {NewMembers.map((user) => (
          <li key={user.Id} className="WidgetSmItem">
            <img src={user.Img} alt="myImage" className="WidgetSmIMG" />
            <div className="WidgetSmUser">
              <span className="WidgetSmUserName">{user.Username}</span>
              <span className="WidgetSmUserTitle">{user.Title}</span>
            </div>
            <button className="WidgetSmButton">
              <MdVisibility className="WidgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
