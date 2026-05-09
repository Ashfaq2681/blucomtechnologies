const portfolioItems = [
  {
    name: "Hyundai Pakistan",
    title: "TUSCON 2020",
    image: "./landing/tucson.png",
    alt: "tucson",
    tags: ["#Activation", "#Discovery", "#Design"],
    reverse: false,
    alignEnd: false,
    description:
      "Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new revolution in the mini SUV Category. Our part was to enable the user to discover the new product, activate the product, and create a digital strategy with design collaterals.",
  },
  {
    name: "Codility Hub Technologies",
    title: "Interaction Design",
    image: "./landing/toyota.png",
    alt: "toyota",
    tags: ["#Identity", "#Interaction", "#Website"],
    reverse: true,
    alignEnd: true,
    description:
      "Codility Hub came to us with just a name but an amazing proposition. A well-defined brand in the tech sector focused on core development with fast turnaround. We were asked to bring this idea to life through identity and interaction.",
  },
  {
    name: "Codility Hub Technologies",
    title: "Interaction Design",
    image: "./landing/interactive_design.png",
    alt: "interactive_design",
    tags: ["#Identity", "#Interaction", "#Interface"],
    reverse: false,
    alignEnd: false,
    description:
      "Codility Hub came to us with just a name but an amazing proposition. A well-defined brand in the tech sector focused on core development with fast turnaround. We were asked to bring this idea to life through identity and interaction.",
  },
];

const PortfolioText = ({ item }) => (
  <div className={`w-full md:w-1/2 flex flex-col justify-center items-center ${item.alignEnd ? "md:items-end" : "md:items-start"} p-6 md:p-12`}>
    <p className="text-2xl text-gray-500">{item.name}</p>
    <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
      {item.title}
    </p>
    <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
      {item.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </div>
    <p className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
      {item.description}
    </p>
  </div>
);

const PortfolioImage = ({ item }) => (
  <div className="w-full md:w-1/2 flex justify-center">
    <img src={item.image} alt={item.alt} className="w-full h-auto object-cover" />
  </div>
);

const Portfolio = () => {
  return (
    <section className="Portfolio w-full">
      {portfolioItems.map((item) => (
        <div
          key={`${item.name}-${item.title}-${item.image}`}
          className={`${item.reverse ? "flex flex-col-reverse md:flex-row" : "flex flex-col md:flex-row"} w-full items-center`}
        >
          {item.reverse ? (
            <>
              <PortfolioText item={item} />
              <PortfolioImage item={item} />
            </>
          ) : (
            <>
              <PortfolioImage item={item} />
              <PortfolioText item={item} />
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
