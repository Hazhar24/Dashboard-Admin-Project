import "./App.css";
import { useRoutes } from "react-router-dom";
import Routes from "./routes";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/topbar/sidebar/SideBar";

function App() {
  let router = useRoutes(Routes);
  return (
    <div>
      <TopBar />
      <div className="flex mt-7 fixed top-10">
        <SideBar />
        {router}
      </div>
    </div>
  );
}

export default App;
