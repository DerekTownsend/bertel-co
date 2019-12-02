import React, { Component } from 'react';
// import {connect} from 'react-redux'
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|JPE?G|svg)$/));
const imageNames = ["Steel Stud at Wahl","Shelter", "Wall at Sundtarnd", "Clouds at Sundstrand", "Clouds at Sundstrand", "Clouds at Sundstrand"]
class ProjectsContainer extends Component {


  renderImages = () => {
    return images.map((image1, index) => {
      const imageType = image1.split("/")[3];
      const imageSplit = imageType.split(".");

        const imageName = imageSplit[0] + "." + imageSplit[imageSplit.length-1]
        return (
          <div>
          <img key={index} alt={imageNames[index]} src={require(`../images/${imageName}`)} />
          <p>{imageNames[index]}</p>
          </div>
      )

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
