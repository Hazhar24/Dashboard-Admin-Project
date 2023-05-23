import { DataWidgetLg } from "@/data/DataWidgetLg";
import { Transactions } from "@/datas";

export default function WidgetLg() {
  const Buttonn = ({ type }) => {
    return <button className={"widget-lg-button " + type}>{type}</button>;
  };
  return (
    <div className="widget-lg">
      <h3 className="widget-lg-title">{DataWidgetLg.WidgetLg[0].name}</h3>
      <table className="wiget-lg-table">
        <tr>
          <th className="widget-lg-th">{DataWidgetLg.WidgetLg[1].name}</th>
          <th className="widget-lg-th">{DataWidgetLg.WidgetLg[2].name}</th>
          <th className="widget-lg-th">{DataWidgetLg.WidgetLg[3].name}</th>
          <th className="widget-lg-th">{DataWidgetLg.WidgetLg[4].name}</th>
        </tr>
        {Transactions.map((item) => (
          <tr key={item.Id}>
            <td className="widget-lg-user">
              <img src={item.img} alt="" className="widget-lg-img" />
              <span>{item.customer}</span>
            </td>
            <td className="widget-lg-date">{item.date}</td>
            <td className="widget-lg-amount">{item.amount}</td>
            <td className="widget-lg-status">
              <Buttonn type={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
