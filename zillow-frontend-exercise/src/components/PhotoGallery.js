import React, { Component } from 'react';

import PhotoItem from './PhotoItem';
import SwitchButton from './SwitchButton';

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
    if (this.state.currentPhoto > 0) {
      this.setState(prevState => {
        return {currentPhoto: prevState.currentPhoto - 1};
      });
    }
  }

  onNextClicked = e => {
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
        <div className="btnColumn">
          <SwitchButton
            direction="prev"
            clicked={e => this.onPrevClicked(e)}
            disabled={this.state.currentPhoto === 0}
          />
        </div>
        <PhotoItem photo={photoData[this.state.currentPhoto]} />
        <div className="btnColumn">
          <SwitchButton
            direction="next"
            clicked={e => this.onNextClicked(e)}
            disabled={this.state.currentPhoto === this.numPhotos - 1}
          />
        </div>
      </div>
    );
  }
};

export default PhotoGallery;
