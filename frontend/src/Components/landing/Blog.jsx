import { Link } from "react-router-dom";

const posts = [
  {
    image: "./landing/insight1.jpg",
    title: "Why attention economy is becoming new ecomony, and how brands can take leverage",
  },
  {
    image: "./landing/insight2.jpg",
    title: "The art of visual communication, how visual grammer can be utilized by the brands",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
      <div className="flex flex-col justify-start items-center m-10 w-auto">
        <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
          Get used to industry Insights
        </p>
        <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
          As a guiding light for the brands
        </p>
      </div>
      <div className="flex flex-row gap-5 justify-center flex-wrap">
        {posts.map((post) => (
          <div key={post.title} className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Insights</p>
            <img src={post.image} alt="insight" className="w-[600px] h-[350px]" />
            <p className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              {post.title}
            </p>
            <p className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">
              Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems
            </p>
            <Link to="/blogsingle" className="bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border cursor-pointer">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
