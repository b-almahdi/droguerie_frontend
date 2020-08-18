import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import AddToCartModal from "./AddToCartModal";

const styles = (theme) => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
  },
  grid: {
    marginTop: 20,
    marginLeft: 30,
  },
});
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      showModal: false,
    };
    this.OpenModal = this.OpenModal.bind(this);
  }
  OpenModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }
  render() {
    const { item } = this.props;

    return (
      <>
        {this.state.showModal && <AddToCartModal />}
        <Grid item xs={2} style={{ marginTop: 20, marginLeft: 30 }}>
          <Card className={styles.card}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/produit/${item.id}`}
            >
              <CardMedia
                className={styles.media}
                component="img"
                image={item.imageUrl}
                title="description goes.."
              />
              <CardContent className={styles.card}>
                <Typography component="h2" gutterBottom>
                  {item.nom}
                </Typography>
                <Typography component="h3" gutterBottom>
                  {item.prix} Dhs
                </Typography>
              </CardContent>
            </Link>
            <CardActions>
              <Button
                size="small"
                color="primary"
                className={styles.button}
                onClick={() => this.OpenModal()}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(ProductList);
