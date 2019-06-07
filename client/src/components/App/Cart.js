import React from 'react';
import { Link } from 'react-router-dom';
// import { ItemCount } from '../../components/App/App.js';
import CartItem from '../../components/App/CartItem';
// import CheckoutForm from '../../components/App/Checkout/CheckoutForm'


export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [], Total: 0 }
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

    // removeFromCart = (product) => {
    //     let products = this.state.products.filter((item) => item.id !== product.id);
    //     let cart = this.state.cart;
    //     delete cart[product.id.toString()];
    //     let total = this.state.total - (product.qantity * product.price)
    //     this.setState({ products, total });
    // }

    // clearCart = () => {
    //     this.setState({ products: [] });
    // }

    render() {
        console.log(this.state)
        console.log(this.props)
        // const { products, total } = this.state;
        let products = Object.values(this.props.userCart);
        console.log(products)
        let total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
        let taxes = (total * 7.5) / 100;
        let Total = total + taxes;
        return (
            <div className="containerCart">
                <div className="card" id="productHolder">
                    <h3 id="cartHeader" className="card-title">Your Cart</h3>
                    {
                        products.map((product, index) =>
                            <CartItem product={product} remove={this.removeFromCart} key={index} />)
                    }
                    {/* products.length ? */}

                    <div className="cartContent">
                        <div className="contentHolder">
                            {!products.length ? <h3 id="noItemWarning" className="text-warning">Your Cart is Empty</h3> : null}
                            <hr id="totalSeparate" />
                            <h4 id="cartTotalHolder">
                            <small id="taxText">Taxes:<span className="text-primary" id="taxDisplay">${taxes}</span></small>
                            
                                <small id="totalText">Total:
                                    <span id="totalDisplay" className="text-primary">
                                    ${Total}
                                    </span>
                                </small>
                            </h4>
                        </div>
                        <div className="purchaseFooter">
                            <Link to="/CheckoutForm">
                                <button id="checkoutBtn" className="btn btn-success">Checkout</button>
                            </Link>
                            <button id="clearBtn" className="btn btn-danger" onClick={this.clearCart}>
                                Clear Cart
                            </button>
                        </div>

                    </div>

                </div>
                </div>

                )
            }
        }
