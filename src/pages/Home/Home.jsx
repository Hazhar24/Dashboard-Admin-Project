import Featuer from "@/components/featuers/Featuer"
import Chart from "@/components/chart/Chart"
import { xAxisData } from "@/datas"
import WidgetSm from "@/components/widgetSm/WidgetSm"
import WidgetLg from "@/components/widgetLg/WidgetLg"

export default function Home() {
  return (
    <div className="Home">
      <Featuer />
      <Chart Grid Title="Month Sale" Data={xAxisData} DataKey="sale" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
