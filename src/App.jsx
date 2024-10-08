import React from "react";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ReadBlog1 from "./Components/ReadBlog1";
import { Route, Routes } from "react-router-dom";
import ReadBlog from "./Components/ReadBlog";
import Scroll from "./Components/Scroll";

const App = () => {
  return (
    <>
      <Navbar />
      <Scroll />
      <Carousel />
      <Routes>
        <Route path="/" element={<ReadBlog1 />} />
        <Route path="/:id" element={<ReadBlog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
