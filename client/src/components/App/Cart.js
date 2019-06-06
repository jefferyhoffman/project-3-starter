import React from 'react';
import { Link } from 'react-router-dom';
// import { ItemCount } from '../../components/App/App.js';
import CartItem from '../../components/App/CartItem';
// import CheckoutForm from '../../components/App/Checkout/CheckoutForm'


export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [], total: 0 }
    }

    componentDidMount() {
        // let itemCount = Object.keys(this.props.cart).length
        // this.setState({
        //   itemCount
        // })
        // console.log(this.props)
        // if (!Cart) return;
        // itemCount(Cart).then((products) => {
        //     let total = 0;
        //     for (var i = 0; i < products.length; i++) {
        //         total += products[i].price * products[i].qty;
        //     }
        //     this.setState({ products, total });
        // });
    }

    removeFromCart = (product) => {
        let products = this.state.products.filter((item) => item.id !== product.id);
        let cart = this.state.cart;
        delete cart[product.id.toString()];
        let total = this.state.total - (product.qty * product.price)
        this.setState({ products, total });
    }

    clearCart = () => {
        this.setState({ products: [] });
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        // const { products, total } = this.state;
        let products = this.props.userCart
        console.log(products)
        let total = 0
        return (
            <div className=" container">
                <h3 className="card-title">Cart</h3>
                {
                    products.map((product, index) =>
                        <CartItem product={product} remove={this.removeFromCart} key={index} />)
                }

                {/* products.length ? */}
                <div><h4>
                    <small>Total Amount: </small>
                    <span className="float-right text-primary">${total}</span>
                </h4><hr />
                </div>
            {!products.length ? <h3 className="text-warning">No item on the cart</h3> : null}

                <Link to="/CheckoutForm">
                    <button className="btn btn-success float-right">Checkout</button>
                </Link>
                <button className="btn btn-danger float-right" onClick={this.clearCart}
                    style={{ marginRight: "10px" }}>Clear Cart</button><br /><br /><br />
            </div>

            )
    }
}
