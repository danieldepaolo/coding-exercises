import React, { Component } from 'react';
import PhotoItem from './PhotoItem';

/*
  state: list of photo data
  renders: a photo item, next/prev buttons
*/

class PhotoGallery extends Component {
  constructor(props) {
    super();

    this.numPhotos = props.photoData.length;

    this.state = {
      currentPhoto: 0,
    };
  }

  onPrevClicked = e => {
    // Having issues where this function is called twice! Hopefully this can help.
    e.stopPropagation();
    e.preventDefault();

    if (this.state.currentPhoto > 0) {
      this.setState(prevState => {
        return {currentPhoto: prevState.currentPhoto - 1};
      });
    }
  }

  onNextClicked = e => {
    // Having issues where this function is called twice! Hopefully this can help.
    e.stopPropagation();
    e.preventDefault();

    if (this.state.currentPhoto < this.numPhotos - 1) {
      this.setState(prevState => {
        return {currentPhoto: prevState.currentPhoto + 1};
      });
    }
  }

  render() {
    const { photoData } = this.props;

    return (
      <div className="photo-gallery">
        <PhotoItem photo={photoData[this.state.currentPhoto]} />
        <button onClick={this.onPrevClicked} disabled={this.state.currentPhoto === 0}>
          Prev
        </button>
        <button onClick={this.onNextClicked} disabled={this.state.currentPhoto === this.numPhotos - 1}>
          Next
        </button>
      </div>
    );
  }
};

export default PhotoGallery;
