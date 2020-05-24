import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoItem from "./PhotoItem";
import LoadingSpinner from "./LoadingSpinner";

class PhotosList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="photo-items__container">
        {this.props.photos.isFetching ? (
          <LoadingSpinner />
        ) : (
          this.props.photos.photos.map((photo) => {
            return <PhotoItem key={photo.id} photo={photo} />;
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps)(PhotosList);
