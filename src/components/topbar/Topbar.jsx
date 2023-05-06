import { DataTopbar } from "../../data/DataTopbar";

export default function TopBar() {
  return (
    <div>
      <div>
        <div className="btn">{DataTopbar.Topbar[0].name}</div>
        <div></div>
      </div>
    </div>
  );
}
