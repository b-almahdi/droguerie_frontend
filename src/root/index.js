import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import HomeComponent from "../home";
import { getStore } from "./store";
import { HOME, produits } from "./paths";
import NavBar from "../appBar";
import ShopContainer from "../product/containers/ShopContainer";
import signUpContainer from "../user/containers/signUpContainer";
import loginContainer from "../user/containers/loginContainer";

const history = createBrowserHistory();
const store = getStore();
store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <NavBar />
            <Switch>
              <Fragment>
                <Route exact path={`/${HOME}`} component={HomeComponent} />
                <Route path={`/${produits}`} component={ShopContainer} />
                <Route path="/ProdcutList" component={ShopContainer} />
                <Route path="/signup" component={signUpContainer} />
                <Route path="/login" component={loginContainer} />
              </Fragment>
              <Redirect from="*" to={`/${HOME}`} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
