import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="flex flex-col items-center mt-20">
            <h3 className="text-3xl font-bold uppercase">Our Services</h3>
            <div className="flex flex-wrap gap-10 justify-center mt-10">
                <ServiceCard title="Fault Management" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aperiam voluptatibus delectus aut eos ut nisi doloremque vero eum. Earum ratione officiis assumenda eum corrupti veniam! Esse facere eos amet." />
                <ServiceCard title="Preventive  Maintenance" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aperiam voluptatibus delectus aut eos ut nisi doloremque vero eum. Earum ratione officiis assumenda eum corrupti veniam! Esse facere eos amet." />
                <ServiceCard title="Spare Management" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aperiam voluptatibus delectus aut eos ut nisi doloremque vero eum. Earum ratione officiis assumenda eum corrupti veniam! Esse facere eos amet." />
                <ServiceCard title="Installation & Commissioning" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aperiam voluptatibus delectus aut eos ut nisi doloremque vero eum. Earum ratione officiis assumenda eum corrupti veniam! Esse facere eos amet." />
                <ServiceCard title="O&M of Optical Fiber Cable" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aperiam voluptatibus delectus aut eos ut nisi doloremque vero eum. Earum ratione officiis assumenda eum corrupti veniam! Esse facere eos amet." />
                <ServiceCard title="COW Site Maintenance" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aperiam voluptatibus delectus aut eos ut nisi doloremque vero eum. Earum ratione officiis assumenda eum corrupti veniam! Esse facere eos amet." />
            </div>
        </div >
    )
}
