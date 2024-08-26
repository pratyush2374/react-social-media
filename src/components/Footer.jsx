import styles from "../styles/Footer.module.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul>
          <li>&copy; 2024 React Media. All rights reserved</li>
        </ul>
        <ul>
          <FaFacebookSquare className= {styles.icon}/> 
          <FaInstagram className= {styles.icon}/> 
          <FaXTwitter className= {styles.icon}/>
        </ul>
      </div>
    </>
  );
};

export default Footer;
