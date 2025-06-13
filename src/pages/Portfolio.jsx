import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Portfolio = () => {
  return (
    <div>
      <Header/>
      <div className="relative w-full">
        <img
          src="/news/news_bg.png"
          alt="image.."
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-green-950 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
            <p className="text-[20px] md:text-[30px] text-[#9A9A9A]">
              Codility Hub Sols
            </p>
            <p className="text-[20px] md:text-[30px] text-[#9A9A9A]">
              MZ-Cepra
            </p>
            <p className="text-[20px] md:text-[30px] text-[#9A9A9A]">
              Ace Intl.
            </p>
            <h1 className="md:text-2xl lg:text-4xl">Hyundai-Pakistan</h1>
            <p className="text-[20px] md:text-[30px] text-[#9A9A9A]">
              Ace Intl.
            </p>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <h1 className=" text-lg md:text-2xl lg:text-4xl">
              Digital Creatives,
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-4xl">
              Impact analysis,
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-4xl">
              Digital Presence,
            </h1>
            <p className="text-[#9A9A9A] mt-2">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-20 text-[#727277] my-40 mx-5 max-w-[1200px] md:mx-auto">
        <div className="text-[24px] min-w-[400px] mt-20">
          <p>Creative showcase</p>
          <p className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">Hyundai- Pakistan</p>
          <p>Digital Pressence 2.0</p>
        </div>
        <div >
          <p className="text-[25px]">Hyundai Pakistan</p>
          <p className="text-[#1E2832] text-[40px] leading-tight">Digital Creatives,<br/> Impact analysis,<br/> Digital Pressence.</p>
          <p className="mt-10">As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line. As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
          <p className="mt-10">As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-stretch items-center w-full">
        <img src="./portfolio/hyundai.png" alt="hyundai" className="w-full h-auto min-w-[200px]"/>
        <img src="./portfolio/tucson.png" alt="tucson" className="w-full h-auto min-w-[200px]"/>
      </div>
        <div className="flex flex-col justify-center items-center mt-72 lg:mt-96">
        <img src="./portfolio/tucson_name.png" alt="" className="w-full h-auto min-w-[200px] max-w-[1200px] -mb-2 lg:-mb-5"/>
        <img src="./portfolio/hyundai_tucson.png" alt="" className="w-full h-auto min-w-[200px] max-w-[1000px] -mb-60"/>
        </div>
      <div className="bg-[#10b981]">
      <div className="flex flex-col md:flex-row justify-center items-start gap-20 text-white bg-[#10b981] pt-72 lg:pt-96 pb-40 max-w-[1200px] mx-5 md:mx-auto">
        <div className="text-[24px] min-w-[400px]">
            <p>Creative showcase</p>
            <p className="text-[40px] underline underline-offset-[15px] decoration-white decoration-4 -mt-3">The Challenge</p>
            <p className="mt-5">Brand Activtion, BTL, Projection Mapping</p>
        </div>
        <div >
            <p className="">As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line. As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
            <p className="mt-10">As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
        </div>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center md:ml-10 lg:ml-20 xl:ml-30 pt-72">
        <div className="flex flex-col gap-20 text-[#727277] max-w-[1200px] w-1/2">
          <div className="text-[24px] min-w-[400px]">
            <p>Creative showcase</p>
            <p className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">How We Did This!</p>
            <p className="mt-5">Digital Pressence 2.0</p>
          </div>
          <div className="max-w-[700px]">
            <p className="">As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line. As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
            <p className="mt-10">As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
          </div>
        </div>
        <img src="/portfolio/ht_sidepose.png" alt="ht" className="w-1/2 object-contain"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-20 text-[#727277] my-40">
      <div className="text-[24px] min-w-[400px]">
            <p>Creative showcase</p>
            <p className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">Digital Collaterals</p>
            <p className="mt-5">Digital Pressence 2.0</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-3">
                <img src="./portfolio/c1.png" alt="" />
                <img src="./portfolio/c2.png" alt="" />
                <img src="./portfolio/c2.png" alt="" />
                <img src="./portfolio/04.png" alt="" />
                <img src="./portfolio/07.png" alt="" />
                <img src="./portfolio/07.png" alt="" />
            </div>
            <div className="">
                <img src="./portfolio/22copy.png" alt="" />
                <img src="./portfolio/8copy.png" alt="" />
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                <img src="./portfolio/01.png" alt="" className="w-full md:w-auto"/>
                <img src="./portfolio/02.png" alt="" className="w-full md:w-auto"/>
                <img src="./portfolio/03.png" alt="" className="w-full md:w-auto"/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Portfolio;
