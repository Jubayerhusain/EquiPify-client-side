import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaMedal, FaGlobe, FaCogs, FaMoneyBillWave } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyEquipify = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const points = [
    {
      icon: <FaMedal className="text-blue-500 text-5xl" />,
      title: "High-Quality Equipment at Best Prices",
      description:
        "Equipify ensures premium sports gear without breaking your budget, offering unbeatable value.",
    },
    {
      icon: <FaGlobe className="text-green-500 text-5xl" />,
      title: "Trusted by Athletes Worldwide",
      description:
        "Athletes from all over the globe trust Equipify for their sporting needs, making it a global favorite.",
    },
    {
      icon: <FaCogs className="text-yellow-500 text-5xl" />,
      title: "Customizable Sports Gear",
      description:
        "Tailor your equipment to match your unique style and performance needs with our customization options.",
    },
    {
      icon: <FaMoneyBillWave className="text-purple-500 text-5xl" />,
      title: "Affordable Financing Options",
      description:
        "Flexible payment plans to help athletes get the gear they need without upfront financial strain.",
    },
  ];
  // bg-gradient-to-r from-green-50 via-white to-blue-50
  return (
    <div className=" w-full py-16">
      <div className="px-6 w-full md:px-12">
        <Fade triggerOnce>
          <h2 className="text-4xl font-bold text-center  mb-12">
            Why Choose <span className="text-blue-500">Equipify</span>?
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <Slide direction={index % 2 === 0 ? "left" : "right"} triggerOnce key={index}>
              <div
                className="h-[330px] bg-base-100 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
                data-aos="fade-up"
              >
                <div className="mb-4 flex justify-center">{point.icon}</div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {point.title}
                </h3>
                <p className="">{point.description}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyEquipify;
