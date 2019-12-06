import React, { Component } from 'react';
// import {connect} from 'react-redux'
import ItemsContainer from './ItemsContainer'
import Cart from '../components/Cart'
import CheckoutForm from '../components/CheckoutForm'

const intialState = {
  cartItems: [],
  checkingOut: false
}

class ShopContainer extends Component {
  constructor(props){
    super(props);
    this.state = intialState;
  }
  addItemToCart = (item) =>{
    console.log(this.state.cartItems);
    this.setState({
      cartItems: [...this.state.cartItems, item],
    })

  }

  updateItemInCart = (item) =>{

    const newList = this.state.cartItems.filter(cartItem => item.item.id !== cartItem.item.id)
    console.log([...newList, item]);

    this.setState({
      cartItems: [...newList, item],
    })

  }

  removeItemInCart = (itemID) =>{

    const newList = this.state.cartItems.filter(cartItem => itemID !== cartItem.item.id)

    this.setState({
      cartItems: newList,
    })

  }

  checkOut = () =>{
    this.setState({
      checkingOut: !this.state.checkingOut
    })
  }

  purchased = () =>{
    this.setState(intialState)
  }




  render(){
    return (
      <div className="shop">
      <h2>Shop</h2>
        <div className="shop-grid">
          {this.state.checkingOut ? <CheckoutForm checkOut={this.checkOut} checkingOut={this.state.checkingOut} purchased={this.purchased}/> : <ItemsContainer cartItems={this.state.cartItems} addItemToCart={this.addItemToCart} updateItemInCart={this.updateItemInCart} removeItemInCart={this.removeItemInCart}/> }

          <Cart cartItems={this.state.cartItems} checkOut={this.checkOut} checkingOut={this.state.checkingOut}/>
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
export default ShopContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
