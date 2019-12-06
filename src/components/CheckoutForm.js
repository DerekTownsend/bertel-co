import React, { Component } from 'react';
// import {connect} from 'react-redux'
const firstState = {
  firstName: "",
  lastName: "",
  address: "",
  addressApt: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  cardNumber:"",
  expirationMonth:"",
  expirationYear:"",
  cvcCode:"",
}
class CheckoutForm extends Component {
  constructor(props){
    super(props);
    this.state = firstState

  }
  handleInputChange = (e)=>{

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e)=> {
    e.preventDefault()

    this.setState(firstState)
    this.props.purchased()
    alert("Thank you for your Purchase")
  }
  // <h3>Shipping Info</h3>
  render(){
    return (
      <div className="checkout">
      <form className="checkout-form" onSubmit={this.submitForm}>
      <label>First Name</label>


      <input type='text'name='firstName'onChange={this.handleInputChange} value={this.state.firstName}/>

      <label>Last Name</label>


      <input type='text'name='lastName'onChange={this.handleInputChange} value={this.state.lastName}/>


      <label>Street Address</label>


      <input type='text'name='address'onChange={this.handleInputChange} value={this.state.address}/>


      <label>Apartment/Suite/Other</label>


      <input type='text' name='addressApt'  onChange={this.handleInputChange} value={this.state.addressApt}/>


      <label>Country</label>


      <input name='country' onChange={ this.handleInputChange} value={this.state.country}/>


      <label>State</label>


      <input name='state' onChange={ this.handleInputChange} value={this.state.state}/>


      <label>City</label>


      <input name='city' onChange={ this.handleInputChange} value={this.state.city}/>


      <label>Zip Code</label>


      <input name='zipCode' onChange={ this.handleInputChange} value={this.state.zipCode}/>

      <hr/>

      <label>Card Number</label>


      <input name='cardNumber' onChange={ this.handleInputChange} value={this.state.cardNumber}/>


      <label>Expiration Month</label>


      <input name='expirationMonth' onChange={ this.handleInputChange} value={this.state.expirationMonth}/>


      <label>Expiration Year</label>


      <input name='expirationYear' onChange={ this.handleInputChange} value={this.state.expirationYear}/>


      <label>CVC Code</label>


      <input name='cvcCode' onChange={ this.handleInputChange} value={this.state.cvcCode}/>



      <input type='submit' value="Check Out"/>

      </form>

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
export default CheckoutForm;
// export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
