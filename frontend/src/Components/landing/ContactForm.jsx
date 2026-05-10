import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center py-20 px-10 md:px-0 text-2xl text-gray-900 flex flex-wrap gap-2 mt-5">
      <div className="flex flex-col justify-start items-center m-10 w-auto">
        <p className="text-2xl text-gray-900 flex flex-wrap gap-2 m-5">Have and idea? lets talk!</p>
        <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
          What you're Thinking?
        </p>
      </div>
      <form action="" className="text-2xl text-gray-900 flex flex-col gap-10 w-full max-w-[1300px] px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
          <input type="text" className="landingInput" placeholder="First Name*" />
          <input type="text" className="landingInput" placeholder="Last Name*" />
          <input type="email" className="landingInput" placeholder="Email*" />
          <input type="text" className="landingInput" placeholder="Company Name*" />
        </div>
        <input type="text" className="landingInput" placeholder="YourTitle" />
        <textarea name="" id="" cols="5" className="landingInput" placeholder="What you want to say?" />
        <div className="w-full flex justify-start">
          <Link to="/blogsingle" className="justify-start bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border cursor-pointer">
            Contact
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
