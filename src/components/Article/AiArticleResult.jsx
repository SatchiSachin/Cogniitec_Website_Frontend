import FrameScreen from "../../assets/Images/Article/Frame 29.svg";
import ShareSection from "./ShareSection";

const AiArticleResult = ({ blog }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-5 lg:py-10 ">
     
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        Afterword: The AI Behind This Article
      </h1>

     
      <div className="w-full bg-white overflow-hidden mb-5">
        <img
          src={FrameScreen}
          alt="AI tool screenshot"
          className="w-full object-cover"
        />
      </div>

     
      <ShareSection slug={blog?.slug} title={blog?.title} />
    </div>
  );
};

export default AiArticleResult;
