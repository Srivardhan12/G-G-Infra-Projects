import ellipseOne from "../assets/ellipse1.png"
import ellipseTwo from "../assets/ellipse2.png"

export default function Home() {
    return (
        <div className="relative overflow-hidden h-screen w-full">
            <div>
                <p className="text-primary-black-100 font-bold text-xl p-5 md:px-14">G&G</p>
            </div>
            <div className="text-center mt-44 relative z-20 w-full md:lg:xl:2xl:w-1/2 lg:w-1/2 md:w-1/2">
                <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold underline decoration-primary-blue-100 uppercase">G&G Infra Projects</h1>
                <p className="font-semibold text-md mt-7">Your trusted partner in telecom <br /> infrastructure solutions.</p>
            </div>
            <div className="block">
                <img className="absolute w-3/5 -top-20 lg:xl:2xl:-top-1/2 -right-1/5 z-1 sm:-top-1/7 md:-top-1/4 xl:-top-5/10 2xl:-top-6/10" src={ellipseOne} />
                <img className="absolute w-3/5 -top-20 lg:xl:2xl:-top-1/2 -right-1/8 sm:-top-1/7 md:-top-1/4 xl:-top-5/10 2xl:-top-6/10" src={ellipseTwo} />
            </div>
            <div className="flex justify-center text-center px-8">
                <p className="w-fit pb-5 border-b-4 border-primary-blue-100 font-medium text-md lg:md:xl:2xl:mt-60 lg:mt-60 mt-40">With over 5 years of industry experience, we specialize in a wide range of telecom <br /> services, trusted by multiple leading clients across <span className="bg-primary-blue-100 px-1 py-0.5">India.</span></p>
            </div>
        </div>
    )
}