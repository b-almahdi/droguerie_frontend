import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import "./style.scss";

export default class ProduitComponent extends React.Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <div>Produit</div>
        </Fragment>
      </Switch>
    );
  }
}
