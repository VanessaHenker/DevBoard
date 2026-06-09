import "./Logo.css";
import logoDevboard from "../../assets/logos/logo-devboard.png";

type LogoProps = {
  size?: number;
};

function Logo({ size = 48 }: LogoProps) {
  return (
    <img
      src={logoDevboard}
      alt="DevBoard"
      className="logo"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

export default Logo;