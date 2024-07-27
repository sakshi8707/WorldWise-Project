import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";
import { useCities } from "../Contexts/CitiesContext";


function AppLayout() {

   const { cities } = useCities();

  
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mapContainer}>
        <Map cities={cities} />
      </div>
    </div>
  );
}

export default AppLayout;

