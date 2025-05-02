import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar() {
    return (
        <div className="bg-primary-blue-400">
            {/* <p className="text-primary-black-100 font-bold text-xl px-5 py-2"><Link to="/">G&G</Link></p> */}
            <Link to="/">
                <img src={logo} className="w-15 brightness-[8] m-2 mx-4" alt="logo" />
            </Link>
        </div>
    )
}
