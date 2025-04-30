import { Link } from "react-router-dom";

export default function Marquee(): React.ReactElement {
  const names = [
    {
      name: "Indus Towers Ltd.",
      link: "https://www.industowers.com/",
    },
    {
      name: "Cloud Excel Pvt. Ltd.",
      link: "http://cloudextel.com/",
    },
    {
      name: "Crest Digital India Pvt. Ltd.",
      link: "https://crestdigitel.com/",
    },
    {
      name: "Shaurrya Teleservices Pvt. Ltd.",
      link: "https://shaurryatele.com/",
    },
    {
      name: "FN Global Pvt. Ltd.",
    },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex gap-32">
        {[...names, ...names].map((name, key) => (
          <div key={key}>
            <Link to={name.link ? name.link : ""} target="_blank" rel="noopener noreferrer">
              <div className="rounded-sm py-2.5 px-5 text-center font-semibold text-md bg-primary-blue-400 text-primary-black-100">
                {name.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}