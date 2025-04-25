export default function Marquee(): React.ReactElement {
    const names = [
        { name: "Indus Towers Ltd." },
        { name: "Cloud Excel Pvt. Ltd." },
        { name: "Crest Digital India Pvt. Ltd." },
        { name: "Shaurrya Teleservices Pvt. Ltd." },
        { name: "FN Global Pvt. Ltd." },
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex gap-32">
                {[...names, ...names].map((name, key) => (
                    <div key={key}>
                        <div className="rounded-sm py-2.5 px-5 text-center font-semibold text-md bg-primary-blue-100 text-primary-white-100">
                            {name.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
