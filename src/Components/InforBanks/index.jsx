import { useContext } from "react";
import { BankContext } from "../../contexts";
import { Header } from "../Header";
import { Nav } from "../Nav";

import style from "./style.module.scss";

export function InforBanks() {
  const BankData = useContext(BankContext);

  return (
    <>
      <Nav />
      <div className={style.InfoPage}>
        <Header />

        <div className={style.InfoContent}>
          <section className={style.TopContent}>
            <h1>Detalhes do banco</h1>
            <div className={style.BankDetalhe}>
              <div>
                <p>Nome do banco</p>
                <p>{BankData.name}</p>
              </div>
              <div>
                <p>Código do banco</p>
                <p>{BankData.code}</p>
              </div>
              <div>
                <p>ISPB</p>
                <p>{BankData.ispb}</p>
              </div>
            </div>
          </section>
          <span />
          <section className={style.Messages}>
            <div>
              <h5>Mensagem 1</h5>
              <p>
                Cupcake ipsum dolor sit amet wafer toffee chocolate bar bear
                claw. Jelly beans tiramisu danish lollipop lemon drops I love
                gummies. Jelly beans cake brownie gummies halvah marzipan cake I
                love cake. Tart chocolate cake chocolate jujubes biscuit lemon
                drops caramels. I love lollipop croissant lollipop I love
                topping topping. Candy canes halvah biscuit tart bear claw
                chocolate cake cake apple pie pudding. Cheesecake chocolate cake
                sweet roll gummies chupa chups wafer chocolate bar. Cake sweet
                roll cupcake carrot cake jelly beans cupcake. Candy jujubes
                cheesecake pastry muffin oat cake carrot cake. I love cupcake
                gingerbread cake I love biscuit I love chocolate. Toffee apple
                pie gummi bears tiramisu candy marshmallow dragée gingerbread.
                Macaroon tart halvah carrot cake fruitcake gingerbread chupa
                chups cake. Tiramisu carrot cake dragée I love oat cake. Sugar
                plum croissant tiramisu candy canes candy canes brownie
                cheesecake gingerbread.
              </p>{" "}
              <br />
            </div>
            <div>
              <h5>Mensagem 2</h5>
              <p>
                Cupcake ipsum dolor sit amet wafer toffee chocolate bar bear
                claw. Jelly beans tiramisu danish lollipop lemon drops I love
                gummies. Jelly beans cake brownie gummies halvah marzipan cake I
                love cake. Tart chocolate cake chocolate jujubes biscuit lemon
                drops caramels. I love lollipop croissant lollipop I love
                topping topping. Candy canes halvah biscuit tart bear claw
                chocolate cake cake apple pie pudding. Cheesecake chocolate cake
                sweet roll gummies chupa chups wafer chocolate bar. Cake sweet
                roll cupcake carrot cake jelly beans cupcake. Candy jujubes
                cheesecake pastry muffin oat cake carrot cake. I love cupcake
                gingerbread cake I love biscuit I love chocolate. Toffee apple
                pie gummi bears tiramisu candy marshmallow dragée gingerbread.
                Macaroon tart halvah carrot cake fruitcake gingerbread chupa
                chups cake. Tiramisu carrot cake dragée I love oat cake. Sugar
                plum croissant tiramisu candy canes candy canes brownie
                cheesecake gingerbread.
              </p>{" "}
              <br />
            </div>
            <div>
              <h5>Mensagem 3</h5>
              <p>
                Cupcake ipsum dolor sit amet wafer toffee chocolate bar bear
                claw. Jelly beans tiramisu danish lollipop lemon drops I love
                gummies. Jelly beans cake brownie gummies halvah marzipan cake I
                love cake. Tart chocolate cake chocolate jujubes biscuit lemon
                drops caramels. I love lollipop croissant lollipop I love
                topping topping. Candy canes halvah biscuit tart bear claw
                chocolate cake cake apple pie pudding. Cheesecake chocolate cake
                sweet roll gummies chupa chups wafer chocolate bar. Cake sweet
                roll cupcake carrot cake jelly beans cupcake. Candy jujubes
                cheesecake pastry muffin oat cake carrot cake. I love cupcake
                gingerbread cake I love biscuit I love chocolate. Toffee apple
                pie gummi bears tiramisu candy marshmallow dragée gingerbread.
                Macaroon tart halvah carrot cake fruitcake gingerbread chupa
                chups cake. Tiramisu carrot cake dragée I love oat cake. Sugar
                plum croissant tiramisu candy canes candy canes brownie
                cheesecake gingerbread.
              </p>{" "}
              <br />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
