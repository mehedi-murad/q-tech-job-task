import { Link } from "react-router-dom";
import logoImg from "../../assets/logo/logo.png"
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-24">
        <div className="flex-1">
          <img src={logoImg} alt="" />
        </div>
        <div className="flex-none">
          <ul className="px-1 flex justify-around gap-10 mr-7">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/">
                    Services
                </Link>
            </li>
            <li>
                <Link to="/">
                    About us
                </Link>
            </li>
            <li>
                <Link to="/">
                    Extra Salespage
                </Link>
            </li>
          </ul>
          <p className="bg-[#20AD96] px-4 py-2 rounded-lg text-white">Get your free guide now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
