import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  );
}

export default AppLayout;
