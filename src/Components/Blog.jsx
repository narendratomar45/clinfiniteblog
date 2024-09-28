import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ item, key }) => {
  return (
    <div className="w-[370px] shadow-lg rounded relative" key={key}>
      <div className=" absolute latest rounded left-[45%]">Latest</div>
      <div>
        <img src={item.image} className="w-full h-[280px]  max-sm:bg-contain" />
      </div>
      <div className=" overflow-y-scroll custom-scrollbar h-[250px] p-5 ">
        <h1>{item.id}</h1>
        <h1 className="text-center   heading ">{item.divtitle}</h1>
        <p className=" text-start textColor ">{item.introduction}</p>
        <Link to={`/${item.id}`}>
          <button className="btn p-2 rounded my-3">Read Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
