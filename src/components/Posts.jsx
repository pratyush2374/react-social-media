import { useContext } from "react";
import styles from "../styles/Post.module.css";
import { AiOutlineLike, AiOutlineDislike, AiOutlineDelete} from "react-icons/ai";
import { PostContext } from "../store/PostContext";

const Posts = ({ postData }) => {

  const {deletePost, like} = useContext(PostContext);
  return (
    <>
      <div className={styles.post}>
        <span className={styles.del}><AiOutlineDelete onClick={() => deletePost(postData.id)}/></span>
        <h2 className={styles.postTitle}>{postData.title}</h2>
        <p className={styles.postBody}>{postData.body}</p>
        <div className={styles.postTags}>
          {postData.tags.map((tags) => (
            <span key={tags} className={styles.tag}>#{tags} </span>
          ))}
        </div>
        <div className={styles.reactions}>
          <p className={styles.reactions}>
            <AiOutlineLike className={styles.iconLike} onClick={() => like(postData.id)}/> {postData.reactions.likes}
          </p>
          <p className={styles.reactions}>
            <AiOutlineDislike className={styles.iconDislike}/> {postData.reactions.dislikes}
          </p>
        </div>
      </div>
    </>
  );
};

export default Posts;
