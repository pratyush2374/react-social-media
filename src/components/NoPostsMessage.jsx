import { useContext } from "react";
import styles from "../styles/NoPostsMessage.module.css";
import { PostContext } from "../store/PostContext";
import Loading from "./Loading";

const NoPostsMessage = () => {
  // let { generatePosts } = useContext(PostContext);
  let { fetching } = useContext(PostContext);

  return (
    <div className={styles.noPost}>
      {fetching ? <Loading /> : <h1>No Posts Here !</h1>}
      {/* <button onClick={generatePosts} className={styles.generate}>
        Generate Posts
      </button> */}
      {/* <Loading></Loading> */}
    </div>
  );
};

export default NoPostsMessage;
