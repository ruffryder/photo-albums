import React from "react";
import PhotoAlbum from "./PhotoAlbum";

export default function PhotoalbumsList({ photoalbums }) {
  return (
    <div className="photoalbum-container">
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
  );
}
