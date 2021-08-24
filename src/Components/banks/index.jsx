import { useContext } from 'react';
import { Header } from '../Header';
import { Nav } from '../Nav';
import { BankContext } from '../../contexts';
import { CartBank } from '../CartBank';
import style from './style.module.scss';


export function Banks() {
  const BankData = useContext(BankContext)

  return (
    <>
    <div className={style.Bank}>
      <Nav />
      <div className={style.BankContent}>
        <Header />    

        <div className={style.ListaBancos}>
          <div className={style.BankTitle}>
            <h1>Bancos</h1>
            <h3>{BankData.length} bancos</h3>
            <form className={style.BankSearch}>
              <input 
                type="search" 
                name='BankName' 
                placeholder='Digite o nome do banco' 
              />
              <input 
                type="image" 
                src='/img/MagnifyingGlass.svg' 
                alt='Submit' 
              />
            </form>
          </div>
          <div className={style.CartBank}>
            {BankData.map((Banks, key) => {
              return (
                <CartBank
                  key={Banks.ispb}
                  name={Banks.name}
                  code={Banks.code}
                  ispb={Banks.ispb}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}