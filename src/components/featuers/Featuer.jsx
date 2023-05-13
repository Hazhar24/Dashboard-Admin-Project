import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { DataHome } from "@/data/DataFeatuer";

export default function Featuer() {
  return (
    <div className="featuer">
      <div className="featuerItem">
        <span className="featuerTitle">{DataHome.Home[0].name}</span>
        <div className="featuerContainer">
          <span className="featuerMoney">{DataHome.Home[1].name}</span>
          <span className="featuerRate">
            {DataHome.Home[2].name}<AiOutlineArrowDown className="featuerIcon negative" />
          </span>
        </div>
        <span className="featuerSub">{DataHome.Home[3].name}</span>
      </div>
      <div className="featuerItem">
        <span className="featuerTitle">{DataHome.Home[4].name}</span>
        <div className="featuerContainer">
          <span className="featuerMoney">{DataHome.Home[5].name}</span>
          <span className="featuerRate">
          {DataHome.Home[6].name}<AiOutlineArrowDown className="featuerIcon negative" />
          </span>
        </div>
        <span className="featuerSub">{DataHome.Home[7].name}</span>
      </div>{" "}
      <div className="featuerItem">
        <span className="featuerTitle">{DataHome.Home[8].name}</span>
        <div className="featuerContainer">
          <span className="featuerMoney">{DataHome.Home[9].name}</span>
          <span className="featuerRate">
          {DataHome.Home[10].name}<AiOutlineArrowDown className="featuerIcon negative" />{" "}
          </span>
        </div>
        <span className="featuerSub">{DataHome.Home[11].name}</span>
      </div>
    </div>
  );
}
