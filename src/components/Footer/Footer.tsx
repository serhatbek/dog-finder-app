import { MdOutlinePowerSettingsNew } from "react-icons/md";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="block"></div>
      <div className="data"></div>
      <div className="block">
        <MdOutlinePowerSettingsNew />
      </div>
    </footer>
  );
};

export default Footer;
