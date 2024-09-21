import React from "react";
import blogData from "../Data/Data.jsx";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams();
  const selectedId = blogData.find((p) => p.id === parseInt(id));
  return (
    <>
      <div className="w-full flex  justify-center gap-10">
        {/* <div className="w-[80%] min-h-[400px]">
          <h1 className="text-center font-bold heading my-10">{selectedId.title}</h1>
          <div className="relative w-[150px] h-[5px] sliderOuterDiv mx-auto transition-all rounded">
                <div className="absolute w-[7px] h-[5px] bg-white sliderInnerDiv transition-all rounded-sm"></div>
          </div>
          <div>
            <b className="intro my-10">{selectedId.introduction}</b>
            <p>{selectedId.introDescription}</p>
          </div>
          <div className="my-10">
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading1.topic.topicName}
            </h2>
            <b className="subheading my-10">{selectedId.heading1.subTopic1.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading1.subTopic1.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading1.subTopic2.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading1.subTopic2.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading1.subTopic3.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading1.subTopic3.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading1.subTopic4.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading1.subTopic4.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading1.subTopic5.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading1.subTopic5.subTopic1Intro}</p>
          </div>
          <div className="my-10">
            <h2 className="text-center font-bold text-blue-800 heading my-10">
              {selectedId.heading2.topic.topicName}
            </h2>
            <b className="subheading my-2">{selectedId.heading2.subTopic1.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading2.subTopic1.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading2.subTopic2.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading2.subTopic2.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading2.subTopic3.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading2.subTopic3.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading2.subTopic4.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading2.subTopic4.subTopic1Intro}</p>
            <b className="subheading my-2">{selectedId.heading2.subTopic5.subTopic1Name}</b>
            <p className="introDesc my-3">{selectedId.heading2.subTopic5.subTopic1Intro}</p>
          </div>
          <div>
            <b className="text-center heading my-10">{selectedId.conslusion.topic}</b>
            <p className="introDesc ">{selectedId.conslusion.content}</p>
          </div>
        </div> */}
       <div className="w-[80%] min-h-[400px] my-10">
       <h1 className="text-center font-bold heading my-10">{selectedId.title}</h1>
        <div className="relative w-[150px] h-[5px] sliderOuterDiv mx-auto transition-all rounded mb-10">
            <div className="absolute w-[7px] h-[5px] bg-white sliderInnerDiv transition-all rounded-sm"></div>
        </div>
        <b className="intro my-10">Introduction</b>
        <p>{selectedId.introduction}</p>
        <div className="my-10">
          <h2 className="text-center font-bold text-blue-800 heading my-10">{selectedId.heading1.mainheading1}</h2>
          <h3 className="subheading my-5">{selectedId.heading1.subheading1}</h3>
          <p className="introDesc ">{selectedId.heading1.subheading1Content}</p>
          <h3 className="subheading my-5">{selectedId.heading1.subheading2}</h3>
          <p className="introDesc ">{selectedId.heading1.subheading2Content}</p>
          <h3 className="subheading my-5">{selectedId.heading1.subheading3}</h3>
          <p className="introDesc ">{selectedId.heading1.subheading3Content}</p>
          <h3 className="subheading my-5">{selectedId.heading1.subheading4}</h3>
          <p className="introDesc ">{selectedId.heading1.subheading4Content}</p>
        </div>
        <div>
          <h2  className="text-center font-bold text-blue-800 heading my-10">{selectedId.heading2.mainheading2}</h2>
          <h3 className="subheading my-5">{selectedId.heading2.subheading1}</h3>
          <p className="introDesc ">{selectedId.heading2.subheading1Content}</p>
          <h3 className="subheading my-5">{selectedId.heading2.subheading2}</h3>
          <p className="introDesc ">{selectedId.heading2.subheading2Content}</p>
          <h3 className="subheading my-5">{selectedId.heading2.subheading3}</h3>
          <p className="introDesc ">{selectedId.heading2.subheading3Content}</p>
        </div>
        <div className="my-10">
          <h2  className="text-center font-bold text-blue-800 heading my-10">{selectedId.heading3.mainheading3}</h2>
          <h3 className="subheading my-5">{selectedId.heading3.subheading1}</h3>
          <p className="introDesc ">{selectedId.heading3.subheading1Content}</p>
          <h3 className="subheading my-5">{selectedId.heading3.subheading2}</h3>
          <p className="introDesc ">{selectedId.heading3.subheading2Content}</p>
          <h3 className="subheading my-5">{selectedId.heading3.subheading3}</h3>
          <p className="introDesc ">{selectedId.heading3.subheading3Content}</p>
        </div>
        <div className="my-10">
          <h2  className="text-center font-bold text-blue-800 heading my-10">{selectedId.heading4.mainheading4}</h2>
          <h3 className="subheading my-5">{selectedId.heading4.subheading1}</h3>
          <p className="introDesc ">{selectedId.heading4.subheading1Content}</p>
          <h3 className="subheading my-5">{selectedId.heading4.subheading2}</h3>
          <p className="introDesc ">{selectedId.heading4.subheading2Content}</p>
        </div>
        <b className=" flex items-center justify-center font-bold text-blue-800 heading my-10">Conclusion</b>
        <p>{selectedId.conclusion}</p>
       </div>
      </div>
    </>
  );
};

export default ReadBlog;
