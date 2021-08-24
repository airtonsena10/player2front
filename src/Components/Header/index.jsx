import style from "./style.module.scss";
export function Header() {
  return (
    <header className={style.Header}>
      <h1>Bancos</h1>

      <div className={style.NavbarTop}>
        <button className={style.CriarBanco}>+Criar Banco</button>
        <img src="/img/Bell.svg" alt="Sino" />

        <div className={style.InforUser}>
          <button>
            {" "}
            Olá,<span>Beleza Rara </span>
            <img src="/img/setaBaixo.svg" alt="Seta" />
          </button>

          <div className={style.InforContent}>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </div>
        </div>
      </div>
    </header>
  );
}
