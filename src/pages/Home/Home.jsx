import Featuer from "@/components/featuers/Featuer"
import Chart from "@/components/chart/Chart"
import { xAxisData } from "@/datas"
import WidgetSm from "@/components/widgetSm/WidgetSm"

export default function Home() {
  return (
    <div className="home">
      <Featuer />
      <Chart Grid Title="Month Sale" Data={xAxisData} DataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  )
}
