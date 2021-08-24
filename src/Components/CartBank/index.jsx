import style from './style.module.scss';

export function CartBank(props) {
  const { name, code, ispb } = props

  return (
    <div className={style.CartContainer}>
      <div className={style.CartTop}>
        <a href="InforBanks">Disparando agora...
          <img src="/img/Arrows.svg" alt="Arrow" />
        </a>
        <img src="/img/btnUsers.svg" alt="Users icon" />
      </div>

      <div className={style.BankData}>
        <span>
          <img src="/img/MegaphoneGreen.svg" alt="Megaphone icon" />
        </span>
        <div>
          <p>{name} - {code}</p>
          <p>ISPB: {ispb}</p>
        </div>
      </div>
    </div>
  )
}