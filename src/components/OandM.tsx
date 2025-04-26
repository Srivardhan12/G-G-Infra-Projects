import faultmanagement from "../assets/faultmanagement.png";
import preventivemaintenance from "../assets/preventiveImage.png";
import sparemanagement from "../assets/sparemanagement.png";
import installationcommissioning from "../assets/installation.png";
import cow from "../assets/cow.png";
import { useEffect } from "react";

export default function OandM() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const oandm = [
    {
      title: "Fault Management",
      description: "Our Telecom Services ensure seamless network performance through a structured approach: Detection, Diagnosis, Correlation, Restoration, and Resolution — minimizing downtime and optimizing communication infrastructure efficiency.",
      image: faultmanagement
    },
    {
      title: "Preventive Maintenance",
      description: "Our Preventive Maintenance services restore, replace, and protect network components, improving reliability, minimizing failures, and ensuring consistent telecom performance through expert procedures and proactive care.",
      image: preventivemaintenance
    },
    {
      title: "Spare Management",
      description: "We deliver end-to-end telecom operations, from infrastructure setup to maintenance, logistics, and cost optimization, ensuring reliable connectivity, efficient service management, and seamless technology integration.",
      image: sparemanagement
    },
    {
      title: "Installation & Commissioning",
      description: "We provide expert installation and commissioning of microwave links, ensuring seamless connectivity between outdoor antennas and indoor units with precise configuration, optimized performance, and reliable network integration.",
      image: installationcommissioning
    },
    {
      title: "COW Site Maintenance",
      description: "We provide COW (Cell on Wheels) deployment for emergency and temporary coverage, ensuring rapid network restoration, seamless connectivity, and reliable mobile communication in critical situations.",
      image: cow
    }
  ];

  return (
    <div className="w-full mt-10">
      <h2 className="text-4xl font-bold text-center">Our Projects</h2>
      <div className='w-fit mx-auto'>
        {oandm.map((service, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-white border-b py-10 px-32 justify-between`}>
            <div className="w-3/6 p-6">
              <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <div className="w-2/6">
              <img src={service.image} alt={service.title} className="w-fit object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
