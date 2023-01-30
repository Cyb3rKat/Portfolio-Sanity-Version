import React from "react";

const ContactMePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form className="flex-col space-y-5">
        <h1 className="text-center">Contact Me</h1>
        <div className="relative group">
          <input
            className="peer h-12 bg-slate-500 border-2 rounded-md outline-none focus:border-rose-600 px-2 transition-all duration-[2000ms] placeholder-transparent "
            name="first-name"
            id="first-name"
            placeholder="Name"
          />
          <label
            className="absolute  top-[14px] left-2 text-sm group-hover:-translate-y-7 group-hover:text-black transition-all duration-[1000ms] group-hover:rounded-2xl group-hover:bg-yellow-500 group-hover:px-4 group-hover:py-1 group-hover:bg-blend-difference hidden  peer-placeholder-shown:block "
            htmlfor="first-name"
          >
            Name
          </label>
        </div>
        <div className="relative group">
          <input
            className="peer h-12 bg-slate-500 border-2 rounded-md outline-none focus:border-rose-600 px-2 transition-all duration-[2000ms] placeholder-transparent "
            name="first-name"
            id="first-name"
            placeholder="Email"
          />
          <label
            className="absolute  top-[14px] left-2 text-sm group-hover:-translate-y-7 group-hover:text-black transition-all duration-[1000ms] group-hover:rounded-2xl group-hover:bg-yellow-500 group-hover:px-4 group-hover:py-1 group-hover:bg-blend-difference hidden  peer-placeholder-shown:block "
            htmlfor="first-name"
          >
            Email
          </label>
        </div>
        <div className="relative group">
          <textarea
            className="peer min-h-[200px] w-full bg-slate-500 border-2 rounded-md outline-none focus:border-rose-600 px-2 transition-all duration-[2000ms] placeholder-transparent "
            name="first-name"
            id="first-name"
            placeholder="Email"
          />
          <label
            className="absolute  top-[14px] left-2 text-sm group-hover:-translate-y-7 group-hover:text-black transition-all duration-[1000ms] group-hover:rounded-2xl group-hover:bg-yellow-500 group-hover:px-4 group-hover:py-1 group-hover:bg-blend-difference hidden  peer-placeholder-shown:block "
            htmlfor="first-name"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 w-full rounded-lg py-2 hover:scale-110 transition-all duration-500"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMePage;
