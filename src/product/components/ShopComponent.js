
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProductList from "./ProductList";


class ShopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.getProduits();
        console.log("ShopComponent")
        console.log(this.props.produits);
    }

    render() {
        const { fetching, produits } = this.props
        return (
            (fetching || produits === undefined)
                ? <div>Loading ...</div>
                :
                <Grid container >
                    <Grid item >
                        <div>
                            <Grid container >
                                {produits.map((item) => (
                                    <ProductList item={item} key={item.id.toString()} />
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
        );
    }
}


export default ShopComponent;
