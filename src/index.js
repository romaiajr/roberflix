import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Pages/Home/App";
import CadastroVideo from "./Pages/Cadastro/video"
import CadastroCategoria from "./Pages/Cadastro/categoria"
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  /*  <React.StrictMode>
      <App />
    </React.StrictMode>, */
  document.getElementById("root")
);
