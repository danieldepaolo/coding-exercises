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
      currentPhoto: 0
    };
  }

  onPrevClicked() {
    const toShow = this.state.currentPhoto === 0
      ? this.numPhotos - 1
      : this.state.currentPhoto - 1;
    
    this.setState({currentPhoto: toShow});
  }

  onNextClicked() {
    const toShow = this.state.currentPhoto === this.numPhotos - 1
      ? 0
      : this.state.currentPhoto + 1;
    
    this.setState({currentPhoto: toShow});
  }

  render() {
    const { photoData } = this.props;

    return (
      <div className="photo-gallery">
        <PhotoItem photo={photoData[this.state.currentPhoto]} />
        <button onClick={() => this.onPrevClicked()}>
          Prev
        </button>
        <button onClick={() => this.onNextClicked()}>
          Next
        </button>
      </div>
    );
  }
};

export default PhotoGallery;
