import { DataWidgetLg } from "@/data/DataWidgetLg";
import { Transactions } from "@/datas";

export default function WidgetLg() {
  const Buttonn = ({ type }) => {
    return <button className={"WidgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">{DataWidgetLg.WidgetLg[0].name}</h3>
      <table className="WigetLgTable">
        <tr>
          <th className="WidgetLgTh">{DataWidgetLg.WidgetLg[1].name}</th>
          <th className="WidgetLgTh">{DataWidgetLg.WidgetLg[2].name}</th>
          <th className="WidgetLgTh">{DataWidgetLg.WidgetLg[3].name}</th>
          <th className="WidgetLgTh">{DataWidgetLg.WidgetLg[4].name}</th>
        </tr>
        {Transactions.map((item) => (
          <tr key={item.Id} className="WidgetLgTr">
            <td className="WidgetLgUser">
              <img src={item.img} alt="" className="WidgetLgImg" />
              <span className="WidgetLgName">{item.customer}</span>
            </td>
            <td className="WidgetLgDate">{item.date}</td>
            <td className="WidgetLgAmount">{item.amount}</td>
            <td className="WidgetLgStatus">
              <Buttonn type={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
