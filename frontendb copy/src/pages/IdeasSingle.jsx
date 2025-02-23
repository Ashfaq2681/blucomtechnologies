import React,{useState} from "react";
// import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
const blogs = [
  {
    title: "The Future of100:2022",
    description:
      "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
  },
  {
    title: "The Future of100:2022",
    description:
      "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
  },
  {
    title: "The Future of100:2022",
    description:
      "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
  },
];
export default function BlogSingle() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <div>
      <div className="relative w-full mt-5">
        <img
          src="./career/careers.png"
          alt="image.."
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
              Adobe Summit 2022
            </h1>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
              and The Hot Topics
            </h1>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <p className="text-xs sm:text-base">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-600  md:py-20 py-10">
        <div className="w-[80%] mx-auto">
          <div className="text-gray-100">
            <p>Found What you are looking for?</p>
            <h1 className="text-white text-4xl my-1">
              Exploring some of the key topics
            </h1>
            <p>
              Let's discuss As the most awarded B2B branding agency in Texas, we
              know how to combine customer insight with impactful content to get
              your brand from the top of the list to the dotted line.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row w-full gap-6 mt-10 sm:mt-20">
            <div className="text-gray-100 sm:w-[50%]">
              <p>Expertise</p>
              <h1 className="text-white text-4xl my-1">Technology</h1>
            </div>
            <div className="text-gray-100 sm:w-[50%]">
              <p>Aurthor</p>
              <h1 className="text-white text-4xl my-1">Polly Row</h1>
              <p>Partner Ships manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-gray-500 my-10 sm:my-20">
        <p>Hyundai Pakistan</p>
        <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
          Digital Creatives,
        </h1>
        <h1 className="text-2xl sm:text-3xl text-gray-900">Impact Analysis,</h1>
        <h1 className="text-2xl sm:text-3xl text-gray-900">
          Digital Presence,
        </h1>
        <p className="my-6">
          As the most awarded B2B branding agency in Texas, we know how to
          combine customer insight with impactful content to get your brand from
          the top of the list to the dotted line.As the most awarded B2B
          branding agency in Texas, we know how to combine customer insight with
          impactful content to get your brand from the top of the list to the
          dotted line.
        </p>
        <p>
          As the{" "}
          <span className="text-black font-semibold">
            most awarded B2B branding agency in Texas
          </span>
          , we know how to combine customer insight with impactful content to
          get your brand from the top of the list to the dotted line. As the
          most awarded B2B branding agency in Texas, we know how to combine
          customer insight with impactful content to get your brand from the top
          of the list to the dotted line.
        </p>
        <div className="w-[57%] mx-auto my-10 sm:my-20">
          <h1 className="text-2xl sm:text-3xl text-gray-900 my-4">
            <p className="inline-flex items-baseline">
              <span className="text-4xl text-blue-700">
                <img src="./icons/quote_left.png" alt="quote_left" />
              </span>
              Organizations
            </p>{" "}
            that develops true customer connections will thrive in the digital
            <p className="inline-flex items-baseline">
              economy{" "}
              <span className="text-4xl text-blue-700">
                <img src="./icons/quote_right.png" alt="quote_right" />
              </span>
            </p>
          </h1>
          <p>Shantanu Naryan</p>
          <p>Adobe CEO</p>
        </div>
        <p className="my-6">
          As the most awarded B2B branding agency in Texas, we know how to
          combine customer insight with impactful content to get your brand from
          the top of the list to the dotted line.As the most awarded B2B
          branding agency in Texas, we know how to combine customer insight with
          impactful content to get your brand from the top of the list to the
          dotted line.
        </p>
        <p>
          As the{" "}
          <span className="text-black font-semibold">
            most awarded B2B branding agency in Texas
          </span>
          , we know how to combine customer insight with impactful content to
          get your brand from the top of the list to the dotted line. As the
          most awarded B2B branding agency in Texas, we know how to combine
          customer insight with impactful content to get your brand from the top
          of the list to the dotted line.
        </p>
      </div>
      <div className="text-gray-500 w-[80%] mx-auto my-10 sm:my-20">
        <div className="">
          <p className="text-lg">Creative showcase</p>
          <h1 className="text-blue-800 text-4xl font-medium underline mb-2 mt-1">
            How We Did This!
          </h1>
          <p className="text-lg font-medium">Digital Presence 2.0</p>
        </div>
        <div className="flex gap-6 text-left flex-col md:flex-row justify-between my-10 sm:my-16 ">
          <div className="md:w-[40%]">
            <p>
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.As the most awarded
              B2B branding agency in Texas, we know how to combine customer
              insight with impactful content to get your brand from the top of
              the list to the dotted line.
            </p>
            <p className="pt-5 sm:pt-10">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
          <div className="md:w-[40%]">
            <p>
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.As the most awarded
              B2B branding agency in Texas, we know how to combine customer
              insight with impactful content to get your brand from the top of
              the list to the dotted line.
            </p>
            <p className="pt-5 sm:pt-10">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
        </div>
        <div className="my-10 sm:my-20 md:w-[55%]">
          <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
            To Watch the keynotes and explore more than 200 sessions, visit the
            summit web experience
          </h1>
          <button className="bg-gray-600 px-4 py-1 text-white font-semibold underline hover:opacity-80 my-5 sm:my-10">
            Read More
          </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.slice(0, showMore ? blogs.length : 2).map((blog, key) => (
            <div className="text-gray-600" key={key}>
              <p className="uppercase py-2">ideas</p>
              <div className="h-60 bg-gray-300">
                <img src={blog.image} alt="img.." />
              </div>
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold underline pt-8 pb-2">
                {blog.title}
              </h1>
              <p>
                {blog.description}
              </p>
              <button className="underline font-semibold hover:text-black">
                Read Report
              </button>
            </div>
          ))}
        </div>
        {blogs.length > 2 && !showMore && (
          <div className=" text-center my-10">
            <button
              onClick={handleShowMore}
              className="bg-gray-800 text-white underline p-2 hover:bg-black"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
