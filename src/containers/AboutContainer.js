import React, { Component } from 'react';
// import {connect} from 'react-redux'

const managementEmployees = [
  {
    id:1,
    name:`Laddie Campbell`,
    role: "Owner",
    yearsOfExperience: "30+",
    src:`laddie-campbell.PNG`
  },
  {
    id:2,
    name:`Linda Sakula`,
    role: "Office Manager",
    yearsOfExperience: "40+",
    src:`linda-sakula.jpg`
  }
]
const onSiteEmployees =[
  {
    id:3,
    name:`John Ruthe`,
    role: "Lead Foreman",
    yearsOfExperience: "40",
    src:`john-ruthe.JPG`
  },
  {
    id:4,
    name:`Egon Six`,
    role: "Lead Foreman",
    yearsOfExperience: "40+",
    src:`egon-six.jpg`
  },
  {
    id:5,
    name:`Calvin Turner`,
    role: "Lead Taper",
    yearsOfExperience: "40+",
    src:`calvin-turner.JPG`
  },
  {
    id:6,
    name:`Steve Wolfe`,
    role: "Lead Foreman",
    yearsOfExperience: "27",
    src:`steve-wolfe.JPG`
  },
  {
    id:7,
    name:`Jeff Arno`,
    role: "Lead Foreman",
    yearsOfExperience: "20",
    src:`jeff-arno.jpg`
  },
  {
    id:8,
    name:`Blake Ulmev`,
    role: "Lead Foreman",
    yearsOfExperience: "15",
    src:`blake-ulmev.jpg`
  }
]
class AboutContainer extends Component {
  generateManagement = () =>{
    return managementEmployees.map((employee, index) => {
        return (
          <div>
            <img key={index} alt={employee.name} src={require(`../staff-img/${employee.src}`)} />
            <p>{employee.name}</p>
            <p>{employee.role} - {employee.yearsOfExperience} Years of experience</p>
          </div>
      )

    })
  }

  generateOnSite = () =>{
    return onSiteEmployees.map((employee, index) => {
        return (
          <div>
            <img key={index} alt={employee.name} src={require(`../staff-img/${employee.src}`)} />
            <p>{employee.name}</p>
            <p>{employee.role} - {employee.yearsOfExperience} Years of experience</p>
          </div>
      )

    })
  }
  render(){
    return (
      <div>
        <h2>About</h2>
        <p>Laddie Campbell - Owner. Laddie began in the construction business in 1988. He worked for the company Midstates Construction for his first job. He first began working for Bertel Peterson which started his long story. For Bertel Peterson he worked in the field on numerous jobs for years. Laddie took over the business in 2009 where he went began his journey of becoming the owner.. Before he owned the company he worked out in the field and also in 2004 was allowed to go to the office and manage the workers on the job sites. This office experience plus the experience of managing the workers on site helped him gain knowledge that he now uses everyday. Mainly Laddie has worked on commercial buildings, but has also done in-house projects and other things. Laddie is known as a great person who is easy to work with.</p>
        <p>Bertel Peterson mainly focuses on jobs located in the Rockford area, Illinois area, but has also branched out to a lot of northern Illinois as a whole. Bertel Peterson will serve your needs if it may be a commercial building or even a small home project.
        </p>
        <h2>Management</h2>
        <div className="management">
          {this.generateManagement()}
        </div>

        <h2>On Site Employees</h2>

        <div className="onSite">
          {this.generateOnSite()}
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
export default AboutContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
