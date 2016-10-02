import React, {Component} from 'react';
import Draggable from 'react-draggable';

import SearchStore from '../stores/SearchStore';
import GifActions from '../actions/GifActions';


export default class PlaygroundStickers extends Component {
  constructor() {
    super();

    this.state = {
      stickers: SearchStore.getStickerPackage(),
    }

    this._onChange = this._onChange.bind(this);
    this._dragMe = this._dragMe.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
   
  }

  _onChange() {
    this.setState({
      stickers: SearchStore.getStickerPackage(),
    })
  }

  _dragMe(e) {
    let playgroundGifContainer = document.getElementById('playgroundGifContainer')
    html2canvas(playgroundGifContainer,  {
      onrendered: function(canvas) {
        document.body.appendChild(canvas);
      },
      allowTaint: true,
    });
  }

  render() {
    let { stickers } = this.state;
    console.log('test: ',);

    return (
      <div className='userStickerContainer'>
        {
          stickers.map(sticker => (
            <Draggable key={sticker.id} bounds= 'parent' moveOnStartChange='true'>
              <div alt={sticker.id} id='userStickerImgContainer'>
                <img className='userSticker' id={sticker.id} src={sticker.image}  onClick={this._dragMe} alt=""/>
              </div>
            </Draggable>
          ))
        }
      </div>
    )
  }

}
