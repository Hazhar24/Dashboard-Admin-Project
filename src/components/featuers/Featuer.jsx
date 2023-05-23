import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { DataHome } from "@/data/DataFeatuer";

export default function Featuer() {
  return (
    <div className="featuer">
      <div className="featuer-item">
        <span className="featuer-title">{DataHome.Home[0].name}</span>
        <div className="featuer-container">
          <span className="featuer-money">{DataHome.Home[1].name}</span>
          <span className="featuer-rate">
            {DataHome.Home[2].name}<AiOutlineArrowDown className="featuer-icon negative" />
          </span>
        </div>
        <span className="featuer-sub">{DataHome.Home[3].name}</span>
      </div>
      <div className="featuer-item">
        <span className="featuer-title">{DataHome.Home[4].name}</span>
        <div className="featuer-container">
          <span className="featuer-money">{DataHome.Home[5].name}</span>
          <span className="featuer-rate">
          {DataHome.Home[6].name}<AiOutlineArrowDown className="featuer-icon negative" />
          </span>
        </div>
        <span className="featuer-sub">{DataHome.Home[7].name}</span>
      </div>{" "}
      <div className="featuer-item">
        <span className="featuer-title">{DataHome.Home[8].name}</span>
        <div className="featuer-container">
          <span className="featuer-money">{DataHome.Home[9].name}</span>
          <span className="featuer-rate">
          {DataHome.Home[10].name}<AiOutlineArrowDown className="featuer-icon negative" />{" "}
          </span>
        </div>
        <span className="featuer-sub">{DataHome.Home[11].name}</span>
      </div>
    </div>
  );
}
