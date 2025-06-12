import {useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
      <Header/>
      <div className="relative w-full">
        <img
          src="./career/careers.png"
          alt="image.."
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
              Establishing and maintaining trust can turn one time buyers into lifelong advocates
            </h1>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
              and The Hot Topics
            </h1>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <p className="text-xs sm:text-base">
              But how do businesses achieve this in an era of skepticism and digital overload? Here are some proven strategies to win and sustain customer trust.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(92.76deg,_#10b981_20.14%,_#1da075_87.31%)]  md:py-20 py-10">
        <div className="w-[80%] mx-auto">
          <div className="text-gray-100">
            <p>Strategies to win and sustain customer trust</p>
            <h1 className="text-white text-4xl my-1">
              Transparency The New Currency of Trust
            </h1>
            <p>
              Customers expect honesty. They want to know what they are buying, how it works, and what it truly offers. Being transparent about pricing, policies, and product limitations can foster credibility.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row w-full gap-6 mt-10 sm:mt-20">
            <div className="text-gray-100 sm:w-[50%]">
              <p>Consumer confidence Marketing</p>
              <h1 className="text-white text-4xl my-1">Psychology of buying decisions</h1>
            </div>
            <div className="text-gray-100 sm:w-[50%]">
              <p>Aurthor</p>
              <h1 className="text-white text-4xl my-1">Polly Row</h1>
              <p>Creative Advertising Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-gray-500 my-10 sm:my-20">
        <p>Impact of brand credibility</p>
        <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
          Clearly display product details, honest reviews, and return policies on your website. Avoid hidden fees or misleading claims.
        </h1>
        <p className="my-6">
          <b className="text-black">Let Your Customers Do the Talking:</b> In a world where people trust peer recommendations over brand messages, social proof is a game-changer. Showcasing reviews, testimonials, and user-generated content reinforces your credibility. Actionable Tip: Encourage satisfied customers to leave reviews. Highlight user success stories on your website and social media platforms
        </p>
        <div className="w-[57%] mx-auto my-10 sm:my-20">
          <h1 className="text-2xl sm:text-3xl text-gray-900 my-4">
            <p className="inline-flex items-baseline">
              <span className="">
                <img src="./icons/quote_left.svg" alt="quote_left" />
              </span>
              People
            </p>{" "}
            do not buy goods and services. They buy <b>relations, stories, and magic</b>
            <p className="inline-flex items-baseline before:mr-2">
              .{" "}
              <span className="">
                <img className="fill-black" src="./icons/quote_right.svg" alt="quote_right" />
              </span>
            </p>
          </h1>
          <p>Seth Godin</p>
          <p>American Author</p>
        </div>
        <p className="my-6">
          Influencer & Celebrity Endorsements, is an enormous power for businesses because of the trust they&apos;ve cultivated with their audiences. When an influencer vouches for a product, their followers are more likely to believe it&apos;s worth purchasing.
        </p>
        <p>A well-crafted case study doesn&apos;t just showcase results; it tells a story. It allows potential customers to see themselves in the narrative, creating an emotional connection that leads to action.</p>
      </div>
      <div className="text-gray-500 w-[80%] mx-auto my-10 sm:my-20">
        <div className="">
          <p className="text-lg">Customer trust stategies</p>
          <h2 className="text-[#10b981] text-4xl font-medium underline mb-2 mt-1">
            Best way to experience the product is to use the product
          </h2>
          <p className="text-lg font-medium">High engagement metrics is signal to prospective buyers hat a brand is reputable and loved by its community.</p>
        </div>
        <div className="flex gap-6 text-left flex-col md:flex-row justify-between my-10 sm:my-16 ">
          <div className="md:w-[40%]">
            <p>
              <b className="text-black">1. Leverage the Wisdom of the Crowd:</b> Showcase customer reviews and ratings prominently. Phrases like &quot;Join over 100,000 satisfied customers&quot; or &quot;Rated 4.9/5 by users worldwide&quot; tap into the collective endorsement, reassuring potential buyers.
            </p>
            <br />
            <p>
              <b className="text-black">2. Influencer and Celebrity Endorsements:</b> Aligning with respected figures can transfer their authority and trust to your brand. However, authenticity is key; today&apos;s consumers can spot disingenuous endorsements from a mile away.
            </p>
            <br />
            <p>
              <b className="text-black">3. Create a Sense of Urgency:</b> Utilize real-time data to highlight product demand. Notifications such as &quot;15 people booked this today&quot; or &quot;Only 2 items left in stock&quot; can spur consumers into action.
            </p>
            <br />
            <p>
              <b className="text-black">4. Share Success Stories:</b> Case studies and testimonials that detail real-world applications of your product or service provide tangible evidence of value. Narratives that potential customers can relate to are particularly compelling.
            </p>
            <br />
            <p>
              <b className="text-black">5. Highlight Media Mentions and Accolades:</b> Features in reputable publications or industry awards serve as third-party endorsements, bolstering your brand&apos;s credibility. An &quot;As Seen In&quot; section on your website can effectively showcase these accolades.
            </p>
          </div>
          <div className="w-[40%]">
            <p className="text-[1.8rem] leading-8 text-black">
              Consider the psychology at play Your next purchase is just one recommendation away. And nothing builds trust faster than real people vouching for your brand
            </p>
            <br />
            <p>
              Humans have an innate desire to belong, to align with the tribe. When we see others endorsing a product, it reduces our perceived risk, creating a sense of trust and credibility. This is why 93% of consumers report that online reviews influence their purchasing decisions.
            </p>
            <br />
            <p>
              However, a word of caution authenticity reigns supreme. Fabricated reviews or exaggerated claims can erode trust and damage your brand&apos;s reputation. Transparency and honesty are paramount in building and maintaining consumer trust.
            </p>
            <br />
            <p>
              Brands that understand consumer psychology can craft campaigns that not only capture attention but also drive meaningful engagement and conversions. By leveraging cognitive biases in an ethical and strategic manner, advertisers can create experiences that feel intuitive, rewarding, and ultimately, irresistible.
            </p>
          </div>
        </div>
        <div className="my-10 sm:my-20 md:w-[55%]">
          <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
            In conclusion, while traditional advertising has its place, the voices of fellow consumers often resonate more profoundly.
          </h1>
          <br />
          <p>By strategically incorporating social proof into your marketing efforts, you not only enhance credibility but also foster a community of advocates who amplify your brand&apos;s message. Remember, in the dance of persuasion, it&apos;s not just about leading but also about showing that others are already on the floor.</p>
          <button className="bg-gray-600 px-4 py-1 text-white font-semibold underline hover:opacity-80 my-5 sm:my-10">
            Read More
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
