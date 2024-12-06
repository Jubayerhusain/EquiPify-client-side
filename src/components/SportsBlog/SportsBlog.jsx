import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

const SportsBlog = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('/blogs.json')
    .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  },[])


  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-16">
      <div className=" mx-auto px-6 md:px-12">
        <Fade direction="down">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore Expert Tips & Insights
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <Slide direction={index % 2 === 0 ? "left" : "right"} triggerOnce key={blog.id}>
              <div
                data-aos="fade-up"
                className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <a
                    href={blog.link}
                    className="text-blue-500 font-bold hover:underline flex items-center gap-2"
                  >
                    Read More →
                  </a>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsBlog;
