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

  sendScreenshot(myPackage) {
    AppDispatcher.dispatch({
      type: 'SEND_PROMISE',
      payload: { myPackage }
    })
  },

  removeShot(id) {
    AppDispatcher.dispatch({
      type: 'REMOVE_SHOT',
      payload: { id },
    })
  },

  removeSticker(id) {
    AppDispatcher.dispatch({
      type: 'REMOVE_STICKER',
      payload: { id },
    })
  },

}

export default GifActions;
