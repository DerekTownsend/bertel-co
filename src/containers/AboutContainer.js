import React, { Component } from 'react';
// import {connect} from 'react-redux'

class AboutContainer extends Component {
  render(){
    return (
      <div>
        <h2>About Us</h2>
        <p>Laddie Campbell - Owner. Laddie began in the construction business in 1988. He worked for the company Midstates Construction for his first job. He first began working for Bertel Peterson which started his long story. For Bertel Peterson he worked in the field on numerous jobs for years. Laddie took over the business in 2009 where he went began his journey of becoming the owner.. Before he owned the company he worked out in the field and also in 2004 was allowed to go to the office and manage the workers on the job sites. This office experience plus the experience of managing the workers on site helped him gain knowledge that he now uses everyday. Mainly Laddie has worked on commercial buildings, but has also done in-house projects and other things. Laddie is known as a great person who is easy to work with.</p>
        <p>Bertel Peterson mainly focuses on jobs located in the Rockford area, Illinois area, but has also branched out to a lot of northern Illinois as a whole. Bertel Peterson will serve your needs if it may be a commercial building or even a small home project.
        </p>
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
export default AboutContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
