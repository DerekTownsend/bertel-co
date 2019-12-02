import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import logo from './hero-img/BPlogo(modified).png';
import HomeContainer from './containers/HomeContainer'
import AboutContainer from './containers/AboutContainer'
import ShopContainer from './containers/ShopContainer'
import QuoteContainer from './containers/QuoteContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ContactUsContainer from './containers/ContactUsContainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component  {
  render(){

  return (
      <div className="container">
        <Navbar />
        <main>
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route exact path='/about' component={AboutContainer}/>
          <Route exact path='/shop' component={ShopContainer}/>
          <Route exact path='/projects' component={ProjectsContainer}/>
          <Route exact path='/contact-us' component={ContactUsContainer}/>

        </Switch>
        </main>
        <Footer />

      </div>
    );
  }
}
// <Route exact path='/quote' component={QuoteContainer}/>

export default App;
// import React, { Component } from 'react';
// // import {connect} from 'react-redux'
//
// class App extends Component {
//   render(){
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }
//
// // const mapStateToProps = (state) => {
// //   return {
// //     movie: state.movie
// //   }
// // }
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     fetchMovies: (movies) => {
// //       dispatch(fetchMovies(movies))
// //     },
// //     setPageMax: (pageNumber) => {
// //       dispatch(setPageMax(pageNumber))
// //     }
// //   }
// // }
// export default App;
// // export default connect(mapStateToProps, mapDispatchToProps)(App);
