import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../hero-img/BPlogo(modified).png';
// import {connect} from 'react-redux'

class Navbar extends Component {
  state = {
    showNav: false
  }
  displayLoginOptions = () =>{
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }

  handleLogout = () =>{
    localStorage.removeItem("user")
    this.props.logoutUser()
    this.props.history.push("/")
  }

  displayLogOutOption = () =>{
    return (
      <div>
        <Link to="/profile">Profile</Link>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
  displayNav = () =>{
    this.setState({showNav: !this.state.showNav})
  }
  // Bertel Co.
  // Bertel Peterson Inc
  // Peterson, Bertel Co., Inc.
  render(){
    return (
      <div className="navbar">
      <img src={logo} alt="logo"/>
        <h1> Bertel Peterson Inc.</h1><br/>


        <div className={this.state.showNav ? "main" : "main responsive"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact-us">Contact Us</Link>


        </div>
        <button className="mobile_buttton"onClick={this.displayNav}>&#9776;</button>
      </div>
    )
  }
}
// <Link to="/quote">Quote</Link>
// navbar login and register links
// {localStorage.getItem("user") ? this.displayLogOutOption() : this.displayLoginOptions()}


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
export default Navbar;
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
