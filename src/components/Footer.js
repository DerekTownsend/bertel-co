import React, { Component } from 'react';
// import {connect} from 'react-redux'

class Footer extends Component {
  render(){
    return (
      <footer className="footer">
      <div className="social-icons">
          <a href="https://www.instagram.com/bertel_peterson/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="https://twitter.com/BertelPeterson" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="https://www.instagram.com/bertel_peterson/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
      </div>


      <p>Office: <a className="footeraddess" href="https://www.google.com/maps/place/5378+Mainsail+Dr,+Roscoe,+IL+61073/@42.39487,-89.0146246,17z/data=!3m1!4b1!4m5!3m4!1s0x8808a4aea5cfae51:0x8fcaa52ded3c34de!8m2!3d42.39487!4d-89.0124359" target="_blank" rel="noopener noreferrer">5378 Mainsail Drive, Roscoe, IL 61073</a></p>

      <p>Phone: <a className="tel" href="tel:815-509-1761">(815)-509-1761</a></p>

      <p>Email: <a className="footeremail" href="mailto:lcbp@tds.net" target="_blank" rel="noopener noreferrer">lcbp@tds.net</a></p>

      </footer>
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
export default Footer;
// export default connect(mapStateToProps, mapDispatchToProps)(Footer);
