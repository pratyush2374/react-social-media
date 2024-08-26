import { useContext } from "react";
import styles from "../styles/AddPost.module.css";
import { PostContext } from "../store/PostContext";

const AddPost = () => {
  const { addPost, titleRef, bodyRef, tagsRef } = useContext(PostContext);
  return (
    <>
      <div className={styles.addPost}>
        <form className={styles.postForm} onSubmit={addPost}>
          <div className={styles.inputPost}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Add Post Title"
              ref={titleRef}
              required
            />
          </div>

          <div className={styles.inputPost}>
            <label htmlFor="body">About It</label>
            <textarea name="body" id="body" rows={4} ref={bodyRef} required></textarea>
          </div>

          <div className={styles.inputPost}>
            <label htmlFor="tags">Add Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Seperate tags by space"
              ref={tagsRef}
              required
            />
          </div>

          <div className={styles.inputPost}>
            <input type="submit" value="Post" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPost;