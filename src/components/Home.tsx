import ellipseOne from "./img/ellipse1.png"
import ellipseTwo from "./img/ellipse2.png"

export default function Home() {
    return (
        <div className="relative overflow-hidden h-screen">
            <div>
                <p className="text-primary-blue-100 font-bold text-xl p-5">G&G</p>
            </div>
            <div className="text-center w-1/2 mt-44">
                <h1 className="text-4xl font-bold underline decoration-primary-blue-100 uppercase"><span className="c-100">G&G</span> Infra Projects</h1>
                <p className="font-semibold text-md mt-7">Your trusted partner in telecom <br /> infrastructure solutions.</p>
            </div>
            <div>
                <img className="ellipseOne" src={ellipseOne} />
                <img className="ellipseTwo" src={ellipseTwo} />
            </div>
            <div className="flex justify-center text-center">
                <p className="w-fit px-10 pb-5 border-b-4 border-primary-blue-100 font-semibold text-md mt-60">With over 5 years of industry experience, we specialize in a wide range of telecom <br /> services, trusted by multiple leading clients across <span className="text-primary-blue-100">India.</span></p>
            </div>
        </div>
    )
}