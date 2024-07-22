// import AppNav from "../Components/AppNav";
// import Map from "../Components/Map.jsx";
import Sidebar from "../Components/Sidebar";
import style from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={style.app}>
      <Sidebar />
      {/* <Map /> */}
    </div>
  );
}

export default AppLayout;
