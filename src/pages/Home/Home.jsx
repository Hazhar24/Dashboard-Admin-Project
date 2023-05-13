import Featuer from "@/components/featuers/Featuer"
import Chart from "@/components/chart/Chart"
import { xAxisData } from "@/datas"
import WidgetSm from "@/components/widgetSm/WidgetSm"
import WidgetLg from "@/components/widgetLg/WidgetLg"

export default function Home() {
  return (
    <div>
      <Featuer />
      <Chart Grid Title="Month Sale" Data={xAxisData} DataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
