import faultmanagement from "../assets/faultmanagement.png";
import preventivemaintenance from "../assets/preventiveImage.png";
import sparemanagement from "../assets/sparemanagement.png";
import opticalfiber from "../assets/opticalfiber.png";
import installationcommissioning from "../assets/installation.png";
import cow from "../assets/cow.png";
import { useEffect } from "react";
import { TextAnimate } from "./magicui/text-animate";

export default function OandM() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const oandm = [
    {
      title: "Spare Management",
      description: "We deliver end-to-end telecom operations, from infrastructure setup to maintenance, logistics, and cost optimization, ensuring reliable connectivity, efficient service management, and seamless technology integration.",
      image: sparemanagement
    },
    {
      title: "Preventive Maintenance",
      description: "Our Preventive Maintenance services restore, replace, and protect network components, improving reliability, minimizing failures, and ensuring consistent telecom performance through expert procedures and proactive care.",
      image: preventivemaintenance
    },
    {
      title: "Fault Management",
      description: "Our Telecom Services ensure seamless network performance through a structured approach: Detection, Diagnosis, Correlation, Restoration, and Resolution — minimizing downtime and optimizing communication infrastructure efficiency.",
      image: faultmanagement
    },
    {
      title: "Optical Fiber Cable",
      description: "We specialize in Optical Fiber Cable (OFC) installation, ensuring high-speed data transmission and reliable connectivity for telecom networks, enhancing performance and efficiency in communication infrastructure.",
      image: opticalfiber
    },
    {
      title: "COW Site Maintenance",
      description: "We provide COW (Cell on Wheels) deployment for emergency and temporary coverage, ensuring rapid network restoration, seamless connectivity, and reliable mobile communication in critical situations.",
      image: cow
    },
    {
      title: "Installation & Commissioning",
      description: "We provide expert installation and commissioning of microwave links, ensuring seamless connectivity between outdoor antennas and indoor units with precise configuration, optimized performance, and reliable network integration.",
      image: installationcommissioning
    }
  ];

  return (
    <div className="w-full mt-10 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
        <TextAnimate by="character">
          Our Services
        </TextAnimate>
      </h2>
      <div className='w-full max-w-7xl mx-auto'>
        {oandm.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white border-b py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 gap-6 md:gap-8 lg:gap-12 justify-between`}>
            <div className="w-full md:w-3/5 lg:w-3/5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{service.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
            <div className="w-full md:w-2/5 lg:w-2/5">
              <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-md shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}