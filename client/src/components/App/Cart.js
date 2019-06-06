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
            <div className="containerCart">
                
                <div className="card" id="productHolder">
                <h3 className="card-title">Your Cart</h3>
                
                
                
                {
                    products.map((product, index) =>
                        <CartItem product={product} remove={this.removeFromCart} key={index} />)
                }
                {/* products.length ? */}
                
                
                <div className="cartContent">
                    <h4>
                    <small>Total Amount: </small>
                    <span className="float-right text-primary">${total}</span>
                </h4>
                <hr />
                </div>
            {!products.length ? <h3 className="text-warning">No item on the cart</h3> : null}
                <footer className="purchaseFooter">
                <Link to="/CheckoutForm">
                    <button id="checkoutBtn" className="btn btn-success">Checkout</button>
                </Link>
                <button id="clearBtn" className="btn btn-danger" onClick={this.clearCart}>Clear Cart</button>
                </footer>
                
                </div>
                
            </div>

            )
    }
}
