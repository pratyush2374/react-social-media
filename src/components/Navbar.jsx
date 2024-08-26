import { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { PostContext } from "../store/PostContext";

const Navbar = () => {
  let { changeTab, currTab } = useContext(PostContext);
  return (
    <div className={styles.navbar}>
      <ul>
        <li
          className={`${currTab==="Home" ? styles.active : null} ${styles.left}`}
          onClick={() => changeTab("Home")}
        >
          Home
        </li>
        <li
          className={`${currTab==="AddPost" ? styles.active : null} ${styles.right}`}
          onClick={() => changeTab("AddPost")}
        >
          Add Post
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
