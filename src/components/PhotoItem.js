import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/favourites/favoruritesActions";
import { connect } from "react-redux";

class PhotoItem extends Component {
  render() {
    const { photo } = this.props;
    const { addToFavourites } = this.props;
    const { removeFromFavourites } = this.props;
    const actionButton = this.props.isFavourite ? (
      <button onClick={() => removeFromFavourites(photo.id)}>
        {" "}
        <FaHeartBroken className="icon remove-icon" />
      </button>
    ) : (
      <button onClick={() => addToFavourites(photo.id, photo)}>
        <FaHeart className="icon favourite-icon" />
      </button>
    );
    return (
      <div className="photo-item">
        <img
          className="photo-item__img"
          src={photo.thumbnailUrl}
          alt={photo.title}
        />
        <div className="photo-item__description">
          <h2 className="photo-item__title">{photo.title}</h2>
          {actionButton}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (id, photo) => dispatch(addToFavourites(id, photo)),
  removeFromFavourites: (id) => dispatch(removeFromFavourites(id)),
});

export default connect(null, mapDispatchToProps)(PhotoItem);
