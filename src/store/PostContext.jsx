import { createContext, useReducer, useRef, useState, useEffect } from "react";

export const PostContext = createContext([]);

const toDoReducer = (state, action) => {
  if (action.type === "ADD_POST") {
    let addedData = {
      // id: Date.now(),
      title: action.payload.title,
      body: action.payload.body,
      tags: action.payload.tags.split(" "),
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      views: 0,
      userId: 1,
    };

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedData),
    })
      .then((res) => res.json())
      .then((post) => {
        action.payload.dispatch({
          type: "POST_ADDED",
          payload: post,
        });
      });

    return state;
  } else if (action.type == "DELETE_POST") {
    let deletedData = state.filter(
      (selector) => selector.id !== action.payload.id
    );
    return deletedData;
  } else if (action.type === "LIKE") {
    // Like Functionality
  } else if (action.type === "DISLIKE") {
    // Dislike Functionality
  } else if (action.type === "GENERATE_NEW_POSTS") {
    return action.payload.initialData;
  } else if (action.type === "POST_ADDED") {
    if (state.some((post) => post.id === action.payload.id)) {
      return state;
    }
    return [action.payload, ...state];
  }

  return state;
};

const PostContextProvider = ({ children }) => {
  const [postList, dispatchPost] = useReducer(toDoReducer, []);
  const isMounted = useRef(false);

  let titleRef = useRef("");
  let bodyRef = useRef("");
  let tagsRef = useRef("");

  // --------------------------------------------------
  const addPost = (event) => {
    event.preventDefault();
    let title = titleRef.current.value;
    let body = bodyRef.current.value;
    let tags = tagsRef.current.value;

    if (title !== "" && body !== "" && tags !== "") {
      dispatchPost({
        type: "ADD_POST",
        payload: {
          title,
          body,
          tags,
          dispatch: dispatchPost,
        },
      });

      titleRef.current.value = "";
      bodyRef.current.value = "";
      tagsRef.current.value = "";
      alert("Post Added Successfully !");
    } else {
      alert("Please Enter all Values");
    }
  };

  // --------------------------------------------------

  const deletePost = (id) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  // --------------------------------------------------

  const like = (id) => {
    console.log(`Like Button Clicked with ID: ${id}`);
  };
  let [currTab, setCurrTab] = useState("Home");

  // --------------------------------------------------

  const changeTab = (val) => {
    setCurrTab(val);
  };

  // --------------------------------------------------

  let [fetching, setFetching] = useState(false);

  // useEffect(() => {
  //   setFetching(true);
  //   // const controller = new AbortController();
  //   // const signal = controller.signal;
  //   let initialData = [];
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       initialData.push(...data.posts);
  //       showPosts(initialData);
  //       setFetching(false);
  //     });

  //   // return () => {
  //   //   controller.abort();
  //   // };
  // }, []);

  useEffect(() => {
    if (!isMounted.current) {
      setFetching(true);
      let initialData = [];
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          initialData.push(...data.posts);
          showPosts(initialData);
          setFetching(false);
        });

      isMounted.current = true;
    }
  }, []);

  // --------------------------------------------------

  // let uId = useRef(0);

  // --------------------------------------------------

  // const generatePosts = () => {
  //   let initialData = [];

  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       initialData.push(...data.posts);
  //       showPosts(initialData);
  //     });
  // };

  // --------------------------------------------------
  // Demo for alternative for useEffect Hook
  /*
  let [generatePosts, setGeneratePosts] = useState(false);
  if (!generatePosts) {
    let initialData = [];
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        initialData.push(...data.posts);
        showPosts(initialData);
      });

    setGeneratePosts(true);
  }
  */
  // --------------------------------------------------

  const showPosts = (initialData) => {
    dispatchPost({
      type: "GENERATE_NEW_POSTS",
      payload: {
        initialData,
      },
    });
  };

  return (
    <>
      <PostContext.Provider
        value={{
          addPost,
          titleRef,
          bodyRef,
          tagsRef,
          currTab,
          setCurrTab,
          changeTab,
          postList,
          deletePost,
          like,
          // generatePosts,
          fetching,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};

// let dummyData = [
//   {
//     id: 1,
//     title: "His mother had always taught him",
//     body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//     tags: ["history", "american", "crime"],
//     reactions: {
//       likes: 192,
//       dislikes: 25,
//     },
//     views: 305,
//     userId: 121,
//   },
//   {
//     id: 2,
//     title: "The old typewriter had a mind of its own",
//     body: "The old typewriter had a mind of its own. It would sometimes type out words that weren't there before, or it would refuse to type anything at all. No one could explain why it behaved this way, but everyone in the office had their theories.",
//     tags: ["fiction", "technology", "mystery"],
//     reactions: {
//       likes: 120,
//       dislikes: 8,
//     },
//     views: 180,
//     userId: 212,
//   },
//   {
//     id: 3,
//     title: "She sat in the garden, watching the sun set",
//     body: "She sat in the garden, watching the sun set behind the hills. It was a peaceful evening, and the flowers in the garden seemed to glow in the fading light. She felt a sense of contentment wash over her, knowing that moments like these were rare and precious.",
//     tags: ["nature", "peace", "reflection"],
//     reactions: {
//       likes: 350,
//       dislikes: 15,
//     },
//     views: 500,
//     userId: 343,
//   },
// ];

export default PostContextProvider;
