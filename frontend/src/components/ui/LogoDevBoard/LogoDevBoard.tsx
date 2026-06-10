import logoDevboard from "../../../assets/imagens/logo-devboard.png";
import "./LogoDevBoard.css";

function LogoDevBoard() {
  return (
    <div className="logo-container">
      <img
        src={logoDevboard}
        alt="Logo da plataforma DevBoard"
        className="logo"
      />
    </div>
  );
}

export default LogoDevBoard;