import Marquee from "./Marquee";

export default function AboutClients() {
    return (
        <div className="text-center">
            <div className="mt-10">
                <h2 className="text-3xl font-bold">ABOUT US</h2>
                <p className="font-semibold text-md mt-10">G&G Infra Projects is a certified and experienced service provider in telecom<br />infrastructure. We are proud to be associated with leading clients.</p>
            </div>
            <div>
                <h3 className="font-semibold text-2xl mt-16 mb-8">Our Clients</h3>
                <Marquee />
            </div>
            <div>
                <h3 className="font-bold text-2xl mt-32 mb-8">Certified by</h3>
                <div className="flex justify-around">
                    <div>
                        {/* <img src="/images/iso.png" alt="ISO" className="w-1/2 mx-auto" /> */}
                        <p className="font-semibold text-md">ISO 9001:2023-24 Certificated</p>
                    </div>
                    <div>
                        {/* <img src="/images/iso.png" alt="ISO" className="w-1/2 mx-auto" /> */}
                        <p className="font-semibold text-md">E - Stac</p>
                        <p className="text-sm">(Electrical-Supervisor Training & Certification)</p>
                    </div>
                    <div>
                        {/* <img src="/images/iso.png" alt="ISO" className="w-1/2 mx-auto" /> */}
                        <p className="font-semibold text-md">H - Stac</p>
                        <p className="text-sm">(Height-Supervisor Training & Certification)</p>
                    </div>
                </div>
                <p className="font-semibold text-md mt-5">We are also enrolled with <span className="underline decoration-primary-blue-100">MSME</span>, <span className="underline decoration-primary-blue-100">Labour laws</span>, <span className="underline decoration-primary-blue-100">ESIP&PF regulations</span></p>
            </div>
        </div>
    )
}
