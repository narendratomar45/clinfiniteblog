import blogData from "../Data/Data.jsx";
import Blog from "./Blog.jsx";
const ReadBlog1 = () => {
  return (
    <>
      <h1 className=" capitalize leastHead text-center my-8">latest blog</h1>
      <h2 className=" readHead text-center ">Read The Our Latest Blog Post</h2>
      <div className=" w-[100%] flex flex-wrap justify-center  my-10 gap-10">
        {blogData.map((item, index) => (
          <Blog item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ReadBlog1;
