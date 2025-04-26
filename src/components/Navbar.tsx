import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-primary-blue-400">
            <p className="text-primary-black-100 font-bold text-xl px-5 py-2"><Link to="/">G&G</Link></p>
        </div>
    )
}
