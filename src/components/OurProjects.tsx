import { useEffect } from 'react';
import fiber from '../assets/fiber.png';
import fibertohome from '../assets/fibertohome.png';
import smallcellshosting from '../assets/smallcellshosting.png';

export default function OurProjects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const ourprojects = [
        {
            title: "Small Cell Hosting",
            description: "Think of small cells as the extra oxygen telecom operators need to handle growing data demands. These 5G-upgradable sites are the future-ready drivers of next-gen connectivity, transforming high-density areas with superior signal strength and sufficient capacity. Our small cells are discreetly installed on streetlights and poles, seamlessly blending into the urban landscape while making a massive impact on network performance. ",
            image: smallcellshosting,
            subtitleone: "",
            subdescriptionone: "",
            subtitletwo: "",
            subdescriptiontwo: ""
        },
        {
            title: "Fiber",
            description: "Our extensive underground and overhead fiber network, the backbone of modern connectivity, spans across India, powering 4G/5G towers, and enterprises. We pride ourselves on rapid deployment while maintaining the highest standards of quality and uptime. With CloudExtel, your data travels faster, safer, and more reliably.",
            image: fiber,
            subtitleone: "Underground Fiber",
            subdescriptionone: "Secure your network with our high-density and reliable underground fiber—tailored for maximum performance and minimal disruption. We offer bespoke dark fiber leasing services to telecom operators at cost- effective rates, maintaining the highest tenancies in the industry.As the only independent provider in the region with such a dense network, we stand out with superior service levels compared to the in -house networks of many established players.",
            subtitletwo: "Overhead Fiber Connectivity (OHFC)",
            subdescriptiontwo: "Connecting cities with our high-speed, scalable overhead fiber networks—delivered with industry-leading feasibility rates, lowest churn, and fastest time to market. CloudExtel's Overhead Fiber network delivers exceptional metro core connectivity, data center to data center links, and seamless last-mile connectivity. <br/>With the best-in-class Service Level Agreements (SLAs), CloudExtel guarantees superior performance and peace of mind for your critical connections."
        },
        {
            title: "FTTH (Fiber To The Home)",
            description: "CloudExtel's FTTH technology brings ultra-high-speed connectivity to residential and commercial areas, supporting multiple telecom operators and internet service providers. You get to stream, work, and connect without limits. With our end-to-end service, we ensure that you have the high-speed connectivity needed to unlock everything today's technology has to offer, from smart home devices to 4K streaming. Elevate your every day with our FTTH solution where the Internet comes directly to your doorstep with blazing speed.",
            image: fibertohome,
            subtitleone: "",
            subdescriptionone: "",
            subtitletwo: "",
            subdescriptiontwo: ""
        }
    ]

    return (
        <div className="w-full mt-10 px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">Our Projects</h2>
            <div className='w-full max-w-7xl mx-auto'>
                {ourprojects.map((service, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white border-b py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 gap-6 md:gap-8 lg:gap-12 justify-between`}>
                        <div className="w-full md:w-3/5 lg:w-3/5">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{service.title}</h2>
                            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                            {service.subtitleone && <h2 className="text-lg sm:text-xl font-semibold mt-4">{service.subtitleone}</h2>}
                            {service.subdescriptionone && <p className="text-gray-600 text-sm sm:text-base">{service.subdescriptionone}</p>}
                            {service.subtitletwo && <h2 className="text-lg sm:text-xl font-semibold mt-4">{service.subtitletwo}</h2>}
                            {service.subdescriptiontwo && <p className="text-gray-600 text-sm sm:text-base">{service.subdescriptiontwo}</p>}
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
