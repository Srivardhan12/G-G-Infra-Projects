// import ellipseOne from "../assets/ellipse1.png"
// import ellipseTwo from "../assets/ellipse2.png"
import celltowerVideo from "../assets/celltower.mp4"
import { TextAnimate } from "./magicui/text-animate"

export default function Home() {
    return (
        <div className="relative overflow-hidden h-screen w-full mb-10">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
            >
                <source src={celltowerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Colored Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full z-10 bg-primary-black-100 opacity-[0.8]"
            ></div>

            {/* Content */}
            <div className="relative z-20 h-full">
                <div>
                    <p className="text-primary-white-100 font-bold text-xl p-5 md:px-14">G&G</p>
                </div>

                {/* Main content container with 70% height */}
                <div className="flex flex-col justify-center items-center h-9/10 w-full">
                    <div className="text-center w-full flex flex-col items-center">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl w-fit px-2 border-b-4 border-primary-blue-100 font-bold underline decoration-primary-blue-100 text-primary-white-200 uppercase">
                            <TextAnimate animation="slideLeft" by="character">
                                G&G Infra Projects
                            </TextAnimate>
                        </h1>

                        <p className="font-semibold text-md mt-7 pb-10 text-primary-white-200 w-4/10 lg:w-1/5 text-center">
                            <TextAnimate>
                                Your trusted partner in telecom infrastructure solutions.
                            </TextAnimate>
                        </p>
                    </div>

                    <div className="flex justify-center text-center px-8 mt-10">
                        <p className="w-fit lg:w-3/5 pb-5 border-b-4 border-primary-blue-100 text-primary-white-200 font-medium text-md">
                            With over 5 years of industry experience, we specialize in a wide range of telecom services, trusted by multiple leading clients across
                            <span className="bg-primary-blue-100 px-1 py-0.5 text-primary-black-100 ml-1">India.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            {/* <div className="block">
                <img className="absolute w-3/5 -top-20 lg:xl:2xl:-top-1/2 -right-1/5 z-1 sm:-top-1/7 md:-top-1/4 xl:-top-5/10 2xl:-top-6/10" src={ellipseOne} />
                <img className="absolute w-3/5 -top-20 lg:xl:2xl:-top-1/2 -right-1/8 sm:-top-1/7 md:-top-1/4 xl:-top-5/10 2xl:-top-6/10" src={ellipseTwo} />
            </div> */}
        </div>
    )
}