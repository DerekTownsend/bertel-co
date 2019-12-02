import React, { Component } from 'react';
// import {connect} from 'react-redux'
import Item from '../components/Item'
import ShopItemForm from '../components/ShopItemForm'

const shopTiles = [
  {
    id:1,
    name:`2" x 12" Textured Beveled Tongue & Groove Ceiling Tile`,
    price: 0.89,
    src:`textured-beveled-tongue.jpg`
  },
  {
    id:2,
    name:`Black 2' x 2' Textured Square Drop Ceiling Panel`,
    price: 4.60,
    src:`textured-square-drop.jpg`
  },
  {
    id:3,
    name:`2' x 4' Acoustical Lay-In Ceiling Tile Panel`,
    price: 3.70,
    src:`acoustical-lay-in.jpg`
  },
  {
    id:4,
    name:`Fissured 2' x 2' Tegular Drop Ceiling Tile`,
    price: 4.35,
    src:`tegular-drop-ceiling.jpg`
  },
  {
    id:5,
    name:`24" x 24'" Textured Angled Tegular Drop Ceiling Panel`,
    price: 3.30,
    src:`textured-angled-tegular.jpg`
  },
  {
    id:6,
    name:`Illusion 2/24 2' x 4' Acoustical 2-Square Lay-In Ceiling Tile Panel`,
    price: 7.10,
    src:`illusion-acoustical.jpg`
  },
  {
    id:7,
    name:`Dome - 2' x 2' PVC Lay-In Ceiling Tile`,
    price: 17.03,
    src:`dome-pvc.jpg`
  },
  {
    id:8,
    name:`Shoreline 2' x 2' Ceiling Tile`,
    price: 10.05,
    src:`shoreline.jpg`
  },
  {
    id:9,
    name:`Parchment 2' x 2' Acoustical Lay-In Ceiling Tile Panel`,
    price: 7.80,
    src:`parchment-acoustical.jpg`
  },
  {
    id:10,
    name:`Standard 2' x 2' PVC Smooth Pro Lay-In Ceiling Tile`,
    price: 5.99,
    src:`standard-pvc-smooth.jpg`
  }
]
const shopDrywall = [
  {
    id:1,
    name:`1/2 in. x 4 ft. x 8 ft. Ultralight Panels`,
    price: 7.50,
    src:`ultralight-panels.jpg`
  },
  {
    id:2,
    name:`1/2 in. x 4 ft. x 8 ft. UltraLight Panels Mold Tough`,
    price: 11.50,
    src:`ultralight-panels-mold.jpg`
  },
  {
    id:3,
    name:`5/8 in. x 4 ft. x 8 ft. Firecode X Panels`,
    price: 8.99,
    src:`firecode-x-panels.jpg`
  },
  {
    id:4,
    name:`1/2 in. x 4 ft. x 12 ft. Ultralight Panels`,
    price: 11.05,
    src:`ultralight-panels-12.jpg`
  },
  {
    id:5,
    name:`3/8 in. x 4 ft. x 8 ft. Gypsum Base Imperial`,
    price: 7.80,
    src:`gypsum-base-imperial.jpg`
  },
  {
    id:6,
    name:`1/4 in. x 4 ft. x 8 ft. Gypsum Panels`,
    price: 8.50,
    src:`gypsum-panels.jpg`
  },
  {
    id:7,
    name:`5/8 in. x 4 ft. x 8 ft. EcoSmart Firecode 30 Tapered Edge Gypsum Board`,
    price: 9.05,
    src:`ecosmart-firecode.jpg`
  },
  {
    id:8,
    name:`5/8 in. x 4 ft. x 8 ft. Mold Tough Firecode X Panels`,
    price: 12.75,
    src:`mold-tough.jpg`
  },
  {
    id:9,
    name:`1/2 in. x 4.5 ft. x 12 ft. Ultralight Panels`,
    price: 16.02,
    src:`ultralight-panels-45.jpg`
  },
  {
    id:10,
    name:`5/8 in. x 4 ft. x 12 ft. Firecode X Panels`,
    price: 13.75,
    src:`firecode-panels.jpg`
  }
]
class ItemsContainer extends Component {

  generateTiles = () => {
    return shopTiles.map(tile =>{
      return(
        <div className="shop-content" key={tile.id}>
          <img src={require(`../shop-images/${tile.src}`)} alt={tile.name}/>
          <p>{tile.name} <br/><br/>Price: ${tile.price.toFixed(2)} ea. </p>
          <ShopItemForm cartItems={this.props.cartItems} updateItemInCart={this.props.updateItemInCart} item={tile} addItemToCart={this.props.addItemToCart} removeItemInCart={this.props.removeItemInCart}/>
        </div>
      )
    })
  }

  generateDrywall = () => {
    return shopDrywall.map(drywall =>{
      return(
        <div className="shop-content" key={drywall.id}>
          <img src={require(`../shop-images/${drywall.src}`)} alt={drywall.name}/>
          <p>{drywall.name} <br/><br/>Price: ${drywall.price.toFixed(2)} ea. </p>
          <ShopItemForm cartItems={this.props.cartItems} updateItemInCart={this.props.updateItemInCart} item={drywall} addItemToCart={this.props.addItemToCart} removeItemInCart={this.props.removeItemInCart}/>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="shop-items">
        <div className="item">
        <h3>Ceiling Tile</h3>
          {this.generateTiles()}
        <h3>Drywall</h3>
          {this.generateDrywall()}
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
export default ItemsContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);

// USG Sheetrock Brand

//
// Price: $

//
// Price: $

//
// Price: $


//
// Price: $

//
//      Price: $

//
// Price: $


//
// Price: $


//
//  Price: $


//
// Price: $


//
// Price: $
