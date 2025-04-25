import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="flex flex-col items-center mt-20">
            <h3 className="text-3xl font-bold uppercase">Our Services</h3>
            <div className="flex flex-wrap gap-10 justify-center mt-10">
                <ServiceCard title="Fault Management" desc="Our Telecom Services ensure seamless network performance through a structured approach: Detection, Diagnosis, Correlation, Restoration, and Resolution — minimizing downtime and optimizing communication infrastructure efficiency." />
                <ServiceCard title="Preventive  Maintenance" desc="Our Preventive Maintenance services restore, replace, and protect network components, improving reliability, minimizing failures, and ensuring consistent telecom performance through expert procedures and proactive care." />
                <ServiceCard title="Spare Management" desc="We deliver end-to-end telecom operations, from infrastructure setup to maintenance, logistics, and cost optimization, ensuring reliable connectivity, efficient service management, and seamless technology integration." />
                <ServiceCard title="Installation & Commissioning" desc="We provide expert installation and commissioning of microwave links, ensuring seamless connectivity between outdoor antennas and indoor units with precise configuration, optimized performance, and reliable network integration." />
                <ServiceCard title="O&M of Optical Fiber Cable" desc="We specialize in Optical Fiber Cable (OFC) maintenance, installation, and route management, ensuring high-speed, reliable network connectivity through expert engineering, site surveys, and precision execution." />
                <ServiceCard title="COW Site Maintenance" desc="We provide COW (Cell on Wheels) deployment for emergency and temporary coverage, ensuring rapid network restoration, seamless connectivity, and reliable mobile communication in critical situations." />
            </div>
        </div >
    )
}
