import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';

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

  onPrevClicked = () => {
    if (this.state.currentPhoto > 0) {
      this.setState(prevState => {
        return {currentPhoto: prevState.currentPhoto - 1};
      });
    }
  }

  onNextClicked = () => {
    if (this.state.currentPhoto < this.numPhotos - 1) {
      this.setState(prevState => {
        return {currentPhoto: prevState.currentPhoto + 1};
      });
    }
  }

  onSwipeRight = (e) => {
    this.onPrevClicked();
  }
 
  onSwipeLeft = (e) => {
    this.onNextClicked();
  }

  render() {
    const { photoData } = this.props;

    return (
      <div className="photo-gallery">
        <div className="btnColumn">
          <SwitchButton
            direction="prev"
            clicked={e => this.onPrevClicked()}
            disabled={this.state.currentPhoto === 0}
          />
        </div>
        <Swipe
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        >
          <PhotoItem photo={photoData[this.state.currentPhoto]} />
        </Swipe>
        <div className="btnColumn">
          <SwitchButton
            direction="next"
            clicked={e => this.onNextClicked()}
            disabled={this.state.currentPhoto === this.numPhotos - 1}
          />
        </div>
      </div>
    );
  }
};

export default PhotoGallery;
