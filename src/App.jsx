import "./App.css";
import { useRoutes } from "react-router-dom";
import Routes from "./routes";
import TopBar from "./components/topbar/TopBar";

function App() {
  let router = useRoutes(Routes);
  return (
    <div>
      <TopBar />
      {router}
    </div>
  );
}

export default App;
