import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { BankContext } from "./contexts/";
import { Banks } from "./Components/banks";
import { Login } from "./Components/Login";
import { api } from "./api";
import { InforBanks } from "./Components/InforBanks";

import "./Styles/GlobalStyles.scss";
import { Autenticar } from "./auth";

function App() {
  const [bankData, setBankData] = useState([]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Autenticar() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  useEffect(() => {
    api
      .get("banks/v1")
      .then((response) => {
        setBankData(response.data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <BankContext.Provider value={bankData}>
      <BrowserRouter>
        <>
          <Route exact path="/" component={Login} />
          
          <PrivateRoute path="/banks" component={Banks} />

          <PrivateRoute path="/InforBanks" component={InforBanks} />
        </>
      </BrowserRouter>
    </BankContext.Provider>
  );
}

export default App;
