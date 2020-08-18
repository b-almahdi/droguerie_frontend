import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Redirect } from "react-router-dom";
export default class AddToCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      redirect: false,
      errors: {},
    };
    // bind this to the event handler
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToCart = this.goToCart.bind(this);
  }

  componentDidUpdate() {
    if (this.state.open !== this.props.inProp) {
      //Perform some operation here
      this.setState({ open: this.props.inProp });
    }
  }

  handleClick() {
    //this.props.onClick();
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit() {
    // Redirect the cart page.
    this.props.history.push("/checkout");
  }
  handlegoToCart = () => {
    this.setState({ open: false, redirect: true });
  };
  goToCart() {
    // Redirect the cart page.
    this.setState({ open: false, redirect: true });
  }
  render() {
    const { redirect } = this.state;
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Ajouté au panier !"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              été ajouté à votre panier.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              variant="outlined"
              color="primary"
            >
              POURSUIVRE VOS ACHATS
            </Button>
            <Button
              onClick={this.goToCart}
              color="primary"
              autoFocus
              variant="contained"
            >
              FINALISER LA COMMANDE
            </Button>
          </DialogActions>
        </Dialog>
        {redirect && <Redirect to="/cart" />}
      </div>
    );
  }
}
