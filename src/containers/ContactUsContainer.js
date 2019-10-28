import React, { Component } from 'react';
// import {connect} from 'react-redux'
const firstState = {
  name: "",
  email: "",
  phone: "",
  message: ""
}
class ContactUs extends Component {
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
    alert("Thank you for your feedback")
  }

  render(){
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-us-form">

        <form onSubmit={this.submitForm}>
        <label>Name</label>
        <br/>

        <input type='text'name='name'onChange={this.handleInputChange} value={this.state.name}/>
        <br/>

        <label>Email</label>
        <br/>

        <input type='text'name='email'onChange={this.handleInputChange} value={this.state.email}/>
        <br/>

        <label>Phone</label>
        <br/>

        <input type='tel' name='phone'  onChange={this.handleInputChange} placeholder="(773) 555-5555" value={this.state.phone}/>
        <br/>

        <label>Message</label>
        <br/>

        <textarea name='message' rows='4' cols='30'onChange={ this.handleInputChange} value={this.state.message}/>
        <br/>

        <input type='submit' value="Submit"/>

        </form>
        </div>

      </div>
    )
  }
}
// pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
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
export default ContactUs;
// export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
