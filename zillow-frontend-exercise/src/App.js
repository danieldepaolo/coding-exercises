import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import photoData from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoGallery photoData={photoData} />
      </div>
    );
  }
}

export default App;
