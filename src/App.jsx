import { useContext, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostContextProvider, { PostContext } from "./store/PostContext";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
      <PostContextProvider>
        <Navbar />
        <AppContent/>
        <Footer />
      </PostContextProvider>
    </>
  );
}



export default App;
