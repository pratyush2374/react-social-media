import { useContext } from "react";
import { PostContext } from "../store/PostContext";
import Posts from "./Posts";
import styles from "../styles/Post.module.css";
import NoPostsMessage from "./NoPostsMessage";

const PostList = () => {
  let { postList } = useContext(PostContext);
  return (
    <>
      {/* {console.log(initialData.length)} */}
      {/* {console.log(initialData2.length)} */}

      {postList.length === 0 ? <NoPostsMessage></NoPostsMessage> : null}
      <div className={styles.outer}>
        {postList.map((post) => (
          <Posts key={post.id} postData={post}></Posts>
        ))}
      </div>
    </>
  );
};

export default PostList;
