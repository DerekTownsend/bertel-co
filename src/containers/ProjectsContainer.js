import React, { Component } from 'react';
// import {connect} from 'react-redux'
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|JPE?G|svg)$/));

class ProjectsContainer extends Component {


  renderImages = () => {
    return images.map(image1 => {
      const imageType = image1.split("/")[3];
      const imageSplit = imageType.split(".");
      if (imageSplit[0] === "BPlogo(modified)" || imageSplit[0] === "BPlogo") {

      } else {
        const imageName = imageSplit[0] + "." + imageSplit[imageSplit.length-1]
        return <img src={require(`../images/${imageName}`)} />
      }

    })
  }
  render(){


    return (
      <div >

      <h2>Projects</h2>
        <div className="project-images">
        {this.renderImages()}
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
export default ProjectsContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
