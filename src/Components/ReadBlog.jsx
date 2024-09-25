import React from "react";
import blogData from "../Data/Data.jsx";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams();
  const selectedId = blogData.find((p) => p.id === parseInt(id));
  return (
    <>
      <div className="w-full flex  justify-center gap-10">
        <div className="w-[80%] min-h-[400px] my-10">
          <h1 className="text-center font-bold heading my-10">
            {selectedId.title}
          </h1>
          <div className="relative w-[150px] h-[5px] sliderOuterDiv mx-auto transition-all rounded mb-10">
            <div className="absolute w-[7px] h-[5px] bg-white sliderInnerDiv transition-all rounded-sm"></div>
          </div>
          <b className="intro my-10">Introduction</b>
          <p>{selectedId.introduction}</p>
          <div className="my-10">
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading1.mainheading1}
            </h2>
            <p>{selectedId.heading1.mainheading1Content}</p>
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading1.preheading1}
            </h2>
            <p>{selectedId.heading1.preheading1Content}</p>
            <h3 className="subheading my-5">
              {selectedId.heading1.subheading1}
            </h3>
            <p className="introDesc ">
              {selectedId.heading1.subheading1Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading1.subheading2}
            </h3>
            <p className="introDesc ">
              {selectedId.heading1.subheading2Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading1.subheading3}
            </h3>
            <p className="introDesc ">
              {selectedId.heading1.subheading3Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading1.subheading4}
            </h3>
            <p className="introDesc ">
              {selectedId.heading1.subheading4Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading1.subheading5}
            </h3>
            <p className="introDesc ">
              {selectedId.heading1.subheading5Content}
            </p>
          </div>
          <div>
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading2.mainheading2}
            </h2>
            <h3 className="subheading my-5">
              {selectedId.heading2.subheading1}
            </h3>
            <p className="introDesc ">
              {selectedId.heading2.subheading1Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading2.subheading2}
            </h3>
            <p className="introDesc ">
              {selectedId.heading2.subheading2Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading2.subheading3}
            </h3>
            <p className="introDesc ">
              {selectedId.heading2.subheading3Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading2.subheading4}
            </h3>
            <p className="introDesc ">
              {selectedId.heading2.subheading4Content}
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading3.mainheading3}
            </h2>
            <h3 className="subheading my-5">
              {selectedId.heading3.subheading1}
            </h3>
            <p className="introDesc ">
              {selectedId.heading3.subheading1Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading3.subheading2}
            </h3>
            <p className="introDesc ">
              {selectedId.heading3.subheading2Content}
            </p>
            <span className="font-semibold">
              {selectedId.heading3.Assignment1}
            </span>
            <span>{selectedId.heading3.Assignment1Content}</span> <br />
            <span className="font-semibold">
              {selectedId.heading3.Assignment2}
            </span>
            <span>{selectedId.heading3.Assignment2Content}</span> <br />
            <span className="font-semibold">
              {selectedId.heading3.Assignment3}
            </span>
            <span>{selectedId.heading3.Assignment3Content}</span>
            <h3 className="subheading my-5">
              {selectedId.heading3.subheading3}
            </h3>
            <p className="introDesc ">
              {selectedId.heading3.subheading3Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading3.subheading4}
            </h3>
            <p className="introDesc ">
              {selectedId.heading3.subheading4Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading3.subheading5}
            </h3>
            <p className="introDesc ">
              {selectedId.heading3.subheading5Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading3.subheading6}
            </h3>
            <p className="introDesc ">
              {selectedId.heading3.subheading6Content}
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading4.mainheading4}
            </h2>
            <p>{selectedId.heading4.mainheading4Content}</p>
            <h3 className="subheading my-5">
              {selectedId.heading4.subheading1}
            </h3>
            <p className="introDesc ">
              {selectedId.heading4.subheading1Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading4.subheading2}
            </h3>
            <p className="introDesc ">
              {selectedId.heading4.subheading2Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading4.subheading3}
            </h3>
            <p className="introDesc ">
              {selectedId.heading4.subheading3Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading4.subheading4}
            </h3>
            <p className="introDesc ">
              {selectedId.heading4.subheading4Content}
            </p>
          </div>
          <div className="my-10">
          <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading5.mainheading5}
            </h2>
            <p>{selectedId.heading5.mainheading5Content}</p>
            <h3 className="subheading my-5">
              {selectedId.heading5.subheading1}
            </h3>
            <p className="introDesc ">
              {selectedId.heading5.subheading1Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading5.subheading2}
            </h3>
            <p className="introDesc ">
              {selectedId.heading5.subheading2Content}
            </p>
            <h3 className="subheading my-5">
              {selectedId.heading5.subheading3}
            </h3>
            <p className="introDesc ">
              {selectedId.heading5.subheading3Content}
            </p>
          </div>
          <b className=" flex items-center justify-center font-bold text-blue-800 heading my-10">
            Conclusion
          </b>
          <p>{selectedId.conclusion}</p>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
