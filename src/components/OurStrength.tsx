import img from "../assets/UpenderChithaluri.jpg";
import { TextAnimate } from "./magicui/text-animate";

export default function OurStrength() {
    return (
        <div className="sm:md:w-3/4 lg:2/3 w-8/10 mx-auto text-center mt-20 px-10 mb-10">
            <h3 className="text-3xl font-bold text-center mb-7">Meet Our Strength</h3>
            <img src={img} alt="image" className="mx-auto rounded-full border-2 w-56 border-primary-blue-100" />
            <h4 className="border-b-4 w-fit font-bold text-2xl border-primary-blue-100 mx-auto my-5 px-5">
                <TextAnimate animation="blurInUp" by="character" once>
                    Mr. Upender Chithaluri
                </TextAnimate>
            </h4>
            <p className="">Having 18 years of experience in telecom and road infra work. Also major experience in fibre laying work and new built site installation for telecom operators.</p>
        </div>
    )
}
