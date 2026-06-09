import logoDevboard from "../../assets/imagens/logo-devboard.png";
import "./Logo.css";

function Logo() {
  return (
    <section className="login-banner">
      <img
        src={logoDevboard}
        alt="Logo da plataforma DevBoard"
        className="login-banner__image"
      />
    </section>
  );
}

export default Logo;