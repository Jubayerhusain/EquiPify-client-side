import React, { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const formRef = useRef(); 

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const data = Object.fromEntries(formData.entries()); 
    console.log("Form Submitted Data:", data);

    // Reset Form
    formRef.current.reset();
  };

  return (
    <div
      className="flex justify-center items-center mt-14 "
      data-aos="fade-up"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" p-8 rounded-lg shadow-2xl max-w-lg w-full"
      >
        <h2 className="text-4xl font-bold text-blue  mb-6 text-center">
          Contact Us
        </h2>
        <div className="mb-4">
          <label className="block  mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full  border-2 p-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block  mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border-2  rounded  outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block  mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            rows="5"
            className="w-full p-3 rounded border-2   outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
