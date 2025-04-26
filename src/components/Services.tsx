import { Link } from "react-router-dom"

const ourprojects = [
    {
        title: "Small Cell Hosting",
    },
    {
        title: "Fiber",
    },
    {
        title: "FTTH (Fiber To The Home)",
    }
]

const oandm = [
    {
        title: "Fault Management",
    },
    {
        title: "Preventive Maintenance",
    },
    {
        title: "Spare Management",
    },
    {
        title: "Installation & Commissioning"
    },
    {
        title: "Optical Fiber Cable"
    },
    {
        title: "COW Site Maintenance"
    }
]

export default function Services() {
    return (
        <div className="flex flex-col items-center mt-20">
            <h3 className="text-3xl font-bold uppercase">Our Services</h3>
            <div className="flex gap-52">
                <div className="mt-10 flex flex-col">
                    <h4 className="font-semibold text-xl py-2 rounded bg-primary-blue-100 text-primary-black-100 text-center mb-2">Our Projects</h4>
                    {ourprojects.map((item, index) => (
                        <div key={index} className="">
                            <p className="font-medium text-lg border-b pt-2 pb-1">{item.title}</p>
                        </div>
                    ))}
                    <Link to="/ourprojects" className="text-center py-2 bg-primary-blue-400 mt-5 font-semibold text-md rounded">Know More<span className="font-bold ml-3">&rarr;</span></Link>
                </div>
                <div className="mt-10 flex flex-col">
                    <h4 className="font-semibold text-xl py-2 rounded bg-primary-blue-100 text-primary-black-100 text-center mb-2">O&M</h4>
                    {oandm.map((item, index) => (
                        <div key={index} className="">
                            <p className="font-medium text-lg border-b pt-2 pb-1">{item.title}</p>
                        </div>
                    ))}
                    <Link to="/oandm" className="text-center py-2 bg-primary-blue-400 mt-5 font-semibold text-md rounded w-full">Know More<span className="font-bold ml-3">&rarr;</span></Link>
                </div>
            </div>
        </div >
    )
}
