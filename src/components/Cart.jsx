import React, { Component } from "react";

class Cart extends Component {
    render(){
        console.log(this.props);
        return (<div style={{
            width: 300,
            padding: 20, 
            position: 'fixed',
            right: 0

        }}>
            <h2>Mon Panier</h2>
            <ul>
                {this.props.panier.map(el => <li>{el}</li>)}
            </ul>
        </div>);
    }
}

export default Cart;