import React, { Component } from 'react';
import PhotoItem from './PhotoItem';

/*
  state: list of photo data
  renders: a photo item, next/prev buttons
*/

class PhotoGallery extends Component {
  constructor(props) {
    super();

    this.state = {
      photos: []
    };
  }

  render() {
    return <PhotoItem />;
  }
};

export default PhotoGallery;
