import { Link } from "react-router-dom";
import LogoWhite from "../../../public/logo/dev-social-logo-white.png";

const Logo = () => {
   return (
      <Link to="/">
          <img src={LogoWhite} alt="logo dev social" className="h-10 " />
      </Link>

   )
} 

export default Logo;