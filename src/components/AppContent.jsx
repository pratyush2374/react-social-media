import { useContext } from "react";
import PostContextProvider, { PostContext } from "../store/PostContext";
import AddPost from "./AddPost";
import PostList from "./PostList";

const AppContent = () => {
  let { currTab } = useContext(PostContext);

  return (
    <>{currTab === "Home" ? <PostList></PostList> : <AddPost></AddPost>}</>
  );
};

export default AppContent;
