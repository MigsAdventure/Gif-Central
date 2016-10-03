import React, { Component } from 'react'
import uuid from 'uuid'
import { FontAwesome } from 'react-fontawesome'
// var FontAwesome = require('react-fontawesome')

import GifActions from '../actions/GifActions'
import SearchStore from '../stores/SearchStore'
import StickerBar from './StickerBar'
import PlaygroundStickers from './PlaygroundStickers'

export default class GifPlayground extends Component {
  constructor() {
    super();
    this.state = {
      image: SearchStore.getImageUrl(),
    }

    this._onChange = this._onChange.bind(this);
    this._submitForm = this._submitForm.bind(this);
    this._sendScreenshot = this._sendScreenshot.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      image: SearchStore.getImageUrl()
    })
  }

  _submitForm(e) {
    e.preventDefault();
    let { searchStickerInput } = this.refs;
    let input = searchStickerInput.value;
    console.log('searchInput: ',input);

    GifActions.fetchStickerSearch(input);
  }

  _sendScreenshot(e) {
    e.preventDefault();
    let playgroundGifContainer = document.getElementById('playgroundGifContainer')

    let x = html2canvas(playgroundGifContainer,  {
      allowTaint: true,
    });

    let myPackage = {
      promise: x,
      id: uuid(),
    }

    GifActions.sendScreenshot(myPackage);
  }

  render() {
    let { image } = this.state;

    return (
      <div>
        <h1>Playground</h1>

        <form >
          <div className="form-group">

            <input ref='searchStickerInput' type="text" className="form-control text-center playInput" placeholder="Search Sticker"/>
            <button onClick={this._submitForm} type="submit" className="btn btn-primary  stickerBtn">Find Sticker</button>

        </div>
        {/* <FontAwesome
        className='fa-camera'
        name='fa-camera'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /> */}
    <button onClick={this._sendScreenshot} className="btn btn-success shotBtn"><span className='fa fa-camera' aria-hidden='true'></span></button>

        </form>

        <StickerBar />

        <div className='playgroundGifContainer' id='playgroundGifContainer'>
          <img className='playgroundGif' src={image} />
          <PlaygroundStickers />
        </div>

      </div>
    )
  }
}
