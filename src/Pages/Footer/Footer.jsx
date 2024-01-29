import { Link } from "react-router-dom";
import logoImg from "../../assets/logo/Logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-10 py-20 px-5">
      <div>
        <img src={logoImg} alt="" />
        <p className="mt-8 text-gray-400">
          Design amazing digital experiences that <br /> create more happy in the
          world.
        </p>
      </div>
      <div>
        <h1 className="mb-4 font-bold">Pages</h1>
        <ul className="space-y-2 text-gray-400">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Extra Sales/Landingpage</Link>
          </li>
          <li>
            <Link>Free Guide</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="mb-4 font-bold">Contact</h2>
        <div className="text-gray-400">
            <p>+123 456 789</p>
            <p>hello@happydigital.nl</p>
        </div>
        <div className="flex gap-5">
          <FaInstagram />
          <FaLinkedin />
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
