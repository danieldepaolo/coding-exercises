import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './App.css';
import PhotoGallery from './components/PhotoGallery';
import photoData from './data.json';

class App extends Component {
  render() {
    return (
      <section>
        <Jumbotron className="banner">
          <h2>Photo Gallery</h2>
        </Jumbotron>
        <div className="App">
          <PhotoGallery photoData={photoData} />
        </div>
      </section>
    );
  }
}

export default App;
