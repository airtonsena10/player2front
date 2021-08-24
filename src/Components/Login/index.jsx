import style from "./style.module.scss";

export function Login() {
  return (
    <div className={style.MainContainer}>
      <div className={style.Login}>
        <div className={style.LoginLeft}>
          <img src="/img/logo.svg" alt="Logo" />
          <h2>Dispare mensagens quando e para quem você quiser.</h2>
          <form className={style.Formlogin}>
            <label for="Email"> Email</label>
            <input type="text" name="email" placeholder="Digite seu e-mail" />
            <label for="Password"> Senha</label>
            <input type="text" name="Password" placeholder="Digite sua senha" />
          </form>
          <button type="submit">
            <a href="/banks">Entra</a>
          </button>
          <p>
            Não tem uma conta? <span> Cadastre-se</span>
          </p>
        </div>
        <footer>
          <p>
            Copyright © 2010-2021 - Informem-se Company S.L. All rights
            reserved.
          </p>
        </footer>
      </div>

      <div className={style.RightInfo}>
        <img src="/img/infoMainPage.svg" alt="img info" />
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sapien mi, commodo ut pellentesque non, fermentum at risus. Sed eu
          augue sit amet leo scelerisque cursus vitae ac dolor
        </p>
      </div>
    </div>
  );
}
