import fiber from '../assets/fiber.png';
import fibertohome from '../assets/fibertohome.png';
import smallcellshosting from '../assets/smallcellshosting.png';

export default function OurProjects() {
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
        <div className="w-full mt-10">
            <h2 className="text-4xl font-bold text-center">Our Projects</h2>
            <div className='w-fit mx-auto'>
                {ourprojects.map((service, index) => (
                    <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-white border-b py-10 px-32 justify-between`}>
                        <div className="w-3/6 p-6">
                            <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                            {service.subtitleone && <h2 className="text-xl font-semibold mt-4">{service.subtitleone}</h2>}
                            {service.subdescriptionone && <p className="text-gray-600">{service.subdescriptionone}</p>}
                            {service.subtitletwo && <h2 className="text-xl font-semibold mt-4">{service.subtitletwo}</h2>}
                            {service.subdescriptiontwo && <p className="text-gray-600">{service.subdescriptiontwo}</p>}
                        </div>
                        <div className="w-2/6 bg-gray-200">
                            <img src={service.image} alt={service.title} className="w-fit object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
