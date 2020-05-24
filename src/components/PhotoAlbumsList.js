import React, { Fragment } from "react";
import PhotoAlbum from "./PhotoAlbum";
import { Link } from "react-router-dom";

export default function PhotoalbumsList({ photoalbums }) {
  return (
    <Fragment>
      <div className="photo-album__container">
        {photoalbums.map((photoAlbum) => {
          return (
            <PhotoAlbum
              key={photoAlbum.id}
              id={photoAlbum.id}
              title={photoAlbum.title}
            />
          );
        })}
      </div>
      <div className="btn-favourites__container">
        <Link className="btn-favourites" to="/favourites">
          Show Favourites
        </Link>
      </div>
    </Fragment>
  );
}
