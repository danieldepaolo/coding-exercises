import React from 'react';

/*
  Renders an image from a URL and a caption
*/

const PhotoItem = props => {
  const { photo } = props;

  return (
    <div className="photo-item">
      <h1>{photo.caption}</h1>
      <img src={photo.url} alt={photo.caption} />
    </div>
  );
};

export default PhotoItem;
