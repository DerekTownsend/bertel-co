import React, { Component } from 'react';
// import {connect} from 'react-redux'

class HomeContainer extends Component {
  render(){
    return (
      <div className="home">
      <img src={require(`../hero-img/hero2.jpeg`)}/>

      <p> Our Mission is to make it come true whether it be making the visions of architects come true, building true relationships with general contractors, staying true to our word with owners and developers, or making our company a truly great career path for our employees.
      </p>
      <p> Bertel Peterson has been serving Rockford and Northern Illinois since 1895. The company is a drywall contractor and also works on walls and ceilings. As Bertel Peterson is known mostly for its commercial work, they also work on smaller projects. Bertel Peterson would be more than happy to help anyone with their needs and desires.
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
export default HomeContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
