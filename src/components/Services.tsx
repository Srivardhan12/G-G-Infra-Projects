import { Link } from "react-router-dom"
// import { InteractiveHoverButton } from "./magicui/interactive-hover-button"

const ourprojects = [
    {
        title: "Small Cell Hosting",
        link: "/ourprojects"
    },
    {
        title: "Fiber",
        link: "/ourprojects"
    },
    {
        title: "FTTH (Fiber To The Home)",
        link: "/ourprojects"
    }
]

const oandm = [
    {
        title: "Fault Management",
        link: "/oandm"
    },
    {
        title: "Preventive Maintenance",
        link: "/oandm"
    },
    {
        title: "Spare Management",
        link: "/oandm"
    },
    {
        title: "Installation & Commissioning",
        link: "/oandm"
    },
    {
        title: "Optical Fiber Cable",
        link: "/oandm"
    },
    {
        title: "COW Site Maintenance",
        link: "/oandm"
    }
]

export default function Services() {
    return (
        <div className="flex flex-col sm:items-center px-5 md:lg:xl:2xl:px-0 mt-20">
            <h3 className="text-3xl font-bold uppercase text-center">Our Services</h3>
            <div className="sm:flex gap-52">
                <div className="mt-10 flex flex-col">
                    <h4 className="font-semibold text-xl py-2 rounded bg-primary-blue-100 text-primary-black-100 text-center mb-2">Our Projects</h4>
                    {ourprojects.map((item, index) => (
                        <div key={index} className="">
                            <Link to={item.link}>
                                <p className="font-medium text-lg border-b pt-2 pb-1">{item.title}</p>
                            </Link>
                        </div>
                    ))}
                    {/* <Link to="/ourprojects">
                        <InteractiveHoverButton className="text-center py-2 text-primary-black-100 bg-primary-blue-400 mt-5 font-semibold text-md rounded w-full">Know More</InteractiveHoverButton>
                    </Link> */}
                </div>
                <div className="mt-10 flex flex-col">
                    <h4 className="font-semibold text-xl py-2 rounded bg-primary-blue-100 text-primary-black-100 text-center mb-2">O&M</h4>
                    {oandm.map((item, index) => (
                        <div key={index} className="">
                            <Link to={item.link}>
                                <p className="font-medium text-lg border-b pt-2 pb-1">{item.title}</p>
                            </Link>
                        </div>
                    ))}
                    {/* <Link to="/oandm" className="">
                        <InteractiveHoverButton className="text-center py-2 text-primary-black-100 bg-primary-blue-400 mt-5 font-semibold text-md rounded w-full">Know More</InteractiveHoverButton>
                    </Link> */}
                </div>
            </div>
        </div >
    )
}
