import { TextAnimate } from "./magicui/text-animate";
import Marquee from "./Marquee";

export default function AboutClients() {
    return (
        <div className="text-center">
            <div className="">
                <h2 className="text-3xl font-bold">
                    <TextAnimate animation="fadeIn" by="line" as="p" delay={0.2}>
                        ABOUT US
                    </TextAnimate>
                </h2>
                <p className="font-semibold text-md mt-10">G&G Infra Projects is a certified and experienced service provider in telecom<br />infrastructure. We are proud to be associated with leading clients.</p>
            </div>
            <div>
                <h3 className="font-semibold text-2xl mt-16 mb-8">Our Clients</h3>
                <Marquee />
            </div>
            <div>
                <h3 className="font-bold text-2xl mt-24 mb-8">Certified by</h3>
                <div className="flex flex-col items-center gap-7">
                    <div className="border-b border-primary-black-100 w-fit">
                        <p className="font-semibold text-md py-2"><span className="border-b-2 border-primary-blue-100">ISO 9001</span>:2023-24 Certificated</p>
                    </div>
                    <div className="border-b border-primary-black-100 w-fit">
                        <p className="font-semibold text-md mb-3 border-b-2 px-2 border-primary-blue-100 w-fit mx-auto">E - Stac</p>
                        <p className="text-sm">(Electrical-Supervisor Training & Certification)</p>
                    </div>
                    <div className="border-b border-primary-black-100 w-fit">
                        <p className="font-semibold text-md mb-3 border-b-2 px-2 border-primary-blue-100 w-fit mx-auto">H - Stac</p>
                        <p className="text-sm">(Height-Supervisor Training & Certification)</p>
                    </div>
                </div>
                <p className="font-semibold text-md mt-5">We are also enrolled with <span className="underline decoration-primary-blue-100">MSME</span>, <span className="underline decoration-primary-blue-100">Labour laws</span>, <span className="underline decoration-primary-blue-100">ESIP&PF regulations</span></p>
            </div>
        </div>
    )
}
