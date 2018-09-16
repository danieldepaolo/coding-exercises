import React from 'react';

/*
  Renders an image from a URL and a caption
*/

const PhotoItem = ({photo}) => {
  return (
    <div className="photo-item">
      <h4 className="caption">{photo.caption}</h4>
      <img className="image" src={photo.url} alt={photo.caption} />
    </div>
  );
};

export default PhotoItem;
