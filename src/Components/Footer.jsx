import styles from "../Styles/footer.module.css";
import styles2 from "../Styles/app.module.css";
import facebook from "/images/ico-facebook.png";
import instagram from "/images/ico-instagram.png";
import whatsapp from "/images/ico-whatsapp.png";
import tiktok from "/images/ico-tiktok.png";
import { useContext } from "react";
import { AppContext } from "./utils/AppContext";



const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <main className={`${styles2[theme]}`}>
      <footer className={styles.footer}>
        <div className={styles2.icons}>
          <img src={facebook} alt="facebook" className={styles.icon} />
          <img src={instagram} alt="instagram" className={styles.icon} />
          <img src={whatsapp} alt="whatsapp" className={styles.icon} />
          <img src={tiktok} alt="tiktok" className={styles.icon} />
        </div>
        <p>Powered by</p>
        <img src="images/DH.png" alt='DH-logo' />
      </footer>
    </main>
  );
};

export default Footer;
