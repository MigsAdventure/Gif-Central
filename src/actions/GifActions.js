import API from '../API'
import AppDispatcher from '../AppDispatcher'

const GifActions = {

  fetchGifSearch(userInput) {
    API.receiveGifSearch(userInput);
  },

  fetchStickerSearch(stickerInput) {
    API.receiveStickerSearch(stickerInput);
  },

  fetchGifById(id) {
    API.receiveGifById(id);
  },

  sendImage(url) {
    AppDispatcher.dispatch({
      type: 'SEND_URL',
      payload: { url }
    })
  },

  sendStickerImage( stickerPackage ) {
    AppDispatcher.dispatch({
      type: 'SEND_STICKER_IMG',
      payload: { stickerPackage }
    })
  },

  sendScreenshot(canvas) {
    // console.log('canvas of GifActions: ',canvas);
    AppDispatcher.dispatch({
      type: 'SEND_CANVAS',
      payload: { canvas }
    })
  },


}

export default GifActions;
