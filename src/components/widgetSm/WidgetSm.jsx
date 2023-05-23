import { DataWidgetSm } from "@/data/DataHomeWidget";
import { MdVisibility } from "@react-icons/all-files/md/MdVisibility";
import { NewMembers } from "@/datas";

export default function WidgetSm() {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">{DataWidgetSm.WidgetSm[0].title}</span>
      <ul className="widget-sm-list">
        {NewMembers.map((user) => (
          <li key={user.Id} className="widget-sm-item">
            <img src={user.Img} alt="myImage" className="widget-sm-IMG" />
            <div className="widget-sm-user">
              <span className="widget-sm-userName">{user.Username}</span>
              <span className="widget-sm-userTitle">{user.Title}</span>
            </div>
            <button className="widget-sm-button">
              <MdVisibility />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
