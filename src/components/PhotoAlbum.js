import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPhotosStartAsync } from "../redux/photo/photoActions";

class PhotoAlbum extends Component {
  constructor(props) {
    super(props);
  }
  albumClickHandler = (id) => {
    const { fetchPhotosStart } = this.props;
    fetchPhotosStart(id);
  };
  render() {
    return (
      <Link
        to={`/album`}
        className="photo-album"
        onClick={() => this.albumClickHandler(this.props.id)}
      >
        <div>
          <h1 className="photo-album__title">{this.props.title}</h1>
        </div>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPhotosStart: (id) => dispatch(fetchPhotosStartAsync(id)),
});

export default connect(null, mapDispatchToProps)(PhotoAlbum);
