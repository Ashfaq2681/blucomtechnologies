const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto px-8 md:px-32 py-5 h-lvh">
        <img
          loading="lazy"
          src="./src/assets/heroimage.png"
          alt="Brand Strategy & Digital Solutions"
          className="w-[200px] lg:w-[400px] xl:w-[850px] h-[182px] lg:h-[300px] xl:h-[600px]"
        />
        <div className="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center">
          <div className="text-2xl text-gray-900">
            It starts from
            <br />
            <p className="text-6xl text-emerald-500 underline decoration-8 decoration-green-300">
              Simple Idea
              <br />
            </p>
            to next unicorn
          </div>
          <div className="mt-24">
            <a href="/" className="text-3g text-gray-900">
              We create valuable brands for your customers rather than just a simple visual.
              We exist to put all our effort into not only creating beautiful visuals but also
              strategic experiences.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
