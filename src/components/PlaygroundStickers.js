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
    this._removeSticker = this._removeSticker.bind(this);
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

  _removeSticker(id) {
    GifActions.removeSticker(id);
  }

  render() {
    let { stickers } = this.state;

    return (
      <div className='userStickerContainer'>
        {
          stickers.map(sticker => (
            <Draggable key={sticker.id} bounds= 'parent' moveOnStartChange='true'>
              <div alt={sticker.id} id='userStickerImgContainer'>
                <img className='userSticker' id={sticker.id} onDoubleClick={() => this._removeSticker(sticker.id)}src={sticker.image} alt=""/>
              </div>
            </Draggable>
          ))
        }
      </div>
    )
  }
}
