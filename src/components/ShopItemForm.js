import React, { Component } from 'react';
// import {connect} from 'react-redux'

class ShopItemForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
      update: false
    }
  }

  handleInputChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isItemInCart = () => {
    // console.log("here");
    const isItemInCart = this.props.cartItems.find(item =>{
      return item.item.id === this.props.item.id
    })
    if (isItemInCart) {
        this.setState({
          update:true,
        })
    }
  }

  // componentDidUpdate(prevProps, prevState, snapshot){
  //   this.isItemInCart()
  //
  // }

  handleSubmit = (e) =>{
    e.preventDefault()
    const newItem = {
      item: this.props.item,
      quantity: this.state.quantity
    }
    // console.log(this.props);
    this.setState({
      update:true,
    })
    this.props.addItemToCart(newItem);

  }

  handleUpdate = (e) =>{
    e.preventDefault()
    if (this.state.quantity > 0) {
      const newItem = {
        item: this.props.item,
        quantity: this.state.quantity
      }
      // console.log(this.props);
      this.props.updateItemInCart(newItem);
    } else {
      // console.log(this.props);
      this.setState({
        update:false,
      })
      this.props.removeItemInCart(this.props.item.id)
    }

  }

  render(){
    return (
      <form onSubmit={this.state.update? this.handleUpdate  : this.handleSubmit}>
        <input type="number" name="quantity" onChange={this.handleInputChange} value={this.state.quantity} min="0"/>
        <input type="submit" value={this.state.update ? "Update" : "Add To Cart" }/>
      </form>
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
export default ShopItemForm;
// export default connect(mapStateToProps, mapDispatchToProps)(ShopItemForm);
