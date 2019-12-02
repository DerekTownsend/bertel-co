import React, { Component } from 'react';
// import {connect} from 'react-redux'
import Item from './Item'


class Cart extends Component {
  constructor(props){
    super(props);
  }
  displayCartItems = () =>{
    const lastItemID = this.props.cartItems[this.props.cartItems.length - 1].item.id;
    return this.props.cartItems.map(item => {
      return (
        <div className={lastItemID === item.item.id ? "last-item" : ""} key={item.item.id}>
          <p>{item.item.name}</p>
          <p className="quantity">{item.quantity}</p>
        </div>
      )
    })
  }
  displaycartListHeader = () => {
    return (
      <div className="header">
        <p>Item</p>
        <p>Quantity</p>
      </div>
    )
  }

  checkout = () => {
    const total = this.props.cartItems.reduce((accumulator, currentValue) =>{
      console.log(currentValue);
      return accumulator + (currentValue.quantity * currentValue.item.price)
    },0).toFixed(2)
    return (
      <div className="checkout">
        <p>${total}</p>
        <button>Checkout</button>
      </div>
    )
  }

  render(){
    return (
      <div className="cart">
        <div className="main-cart">
        <h3>Cart: </h3>
          {this.props.cartItems.length === 0 ? "" : this.displaycartListHeader()}
          {this.props.cartItems.length === 0 ? <p>Empty</p> : this.displayCartItems()}
          {this.props.cartItems.length === 0 ? "" : this.checkout()}
        </div>

      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     movie: state.movie
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMovies: (movies) => {
//       dispatch(fetchMovies(movies))
//     },
//     setPageMax: (pageNumber) => {
//       dispatch(setPageMax(pageNumber))
//     }
//   }
// }
export default Cart;
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
