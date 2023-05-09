import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { DataHome } from "@/data/DataHome";

export default function Featuer() {
  return (
    <div className="featuer">
      <div className="featuerItem">
        <span className="featuerTitle">{DataHome.Home[0].name}</span>
        <div className="featuerContainer">
          <span className="featuerMoney">$ 2,415</span>
          <span className="featuerRate">
            -11.4 <AiOutlineArrowDown className="featuerIcon negative" />{" "}
          </span>
        </div>
        <span className="featuerSub">{DataHome.Home[1].name}</span>
      </div>
      <div className="featuerItem">
        <span className="featuerTitle">{DataHome.Home[2].name}</span>
        <div className="featuerContainer">
          <span className="featuerMoney">$ 4,415</span>
          <span className="featuerRate">
            -1.4 <AiOutlineArrowDown className="featuerIcon negative" />{" "}
          </span>
        </div>
        <span className="featuerSub">{DataHome.Home[3].name}</span>
      </div>{" "}
      <div className="featuerItem">
        <span className="featuerTitle">{DataHome.Home[4].name}</span>
        <div className="featuerContainer">
          <span className="featuerMoney">$ 2,225</span>
          <span className="featuerRate">
            +2.4 <AiOutlineArrowDown className="featuerIcon negative" />{" "}
          </span>
        </div>
        <span className="featuerSub">{DataHome.Home[5].name}</span>
      </div>
    </div>
  );
}
