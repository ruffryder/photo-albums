import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoItem from "./PhotoItem";

class FavouritesList extends Component {
  render() {
    const { favourites } = this.props.favourites;
    const { removeFromFavourites } = this.props;
    return (
      <div className="photo-items__container">
        {Object.keys(favourites).map(function (key) {
          return (
            <PhotoItem key={key} photo={favourites[key]} isFavourite={true} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

export default connect(mapStateToProps)(FavouritesList);
