export default function ServiceCard({
    title,
    desc
}: {
    title: string,
    desc: string,
}) {
    return (
        <div className="w-1/4 py-5 px-2.5 rounded-md bg-primary-blue-100">
            <div>
                <h4 className="text-primary-white-100 font-semibold text-xl pb-5">{title}</h4>
                <p className="text-primary-white-200">{desc}</p>
            </div>
        </div>
    )
}
