import Featuer from "@/components/featuers/Featuer"
import Chart from "@/components/chart/Chart"
import { xAxisData } from "@/datas"

export default function Home() {
  return (
    <div>
      <Featuer />
      <Chart Grid Title="Month Sale" Data={xAxisData} DataKey="sale" />
    </div>
  )
}
