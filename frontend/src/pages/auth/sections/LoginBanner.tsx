import logoDevboard from "../../../assets/imagens/logo-devboard.png";

function LoginBanner() {
  return (
    <section className="login-banner">
      <img
        src={logoDevboard}
        alt="Logo da plataforma DevBoard"
        className="login-banner__image"
      />

      <header className="login-banner__header">
        <h2>DevBoard</h2>
        <p>Seu painel de produtividade</p>
      </header>

      <div className="login-banner__content">
        <h1>
          Organize. Acompanhe. <span>Evolua.</span>
        </h1>

        <p>
          Gerencie seus projetos, tarefas, estudos e metas em um só lugar.
          Mais foco, mais produtividade.
        </p>
      </div>

      <div className="login-banner__features">
        <div className="feature">
          <h4>Visão completa</h4>
          <p>
            Acompanhe o progresso de todos os seus projetos e atividades.
          </p>
        </div>

        <div className="feature">
          <h4>Mais organização</h4>
          <p>
            Tarefas, prazos e prioridades sempre sob controle.
          </p>
        </div>

        <div className="feature">
          <h4>Produtividade real</h4>
          <p>
            Ferramentas inteligentes para você alcançar seus objetivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginBanner;