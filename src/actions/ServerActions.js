import AppDispatcher from '../AppDispatcher'

const ServerActions = {

  sendSearchResults(gifResults) {
    // console.log('sanity: ',gifResults);
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { gifResults }
    })
  },

  sendStickerSearchResults(stickerResults) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STICKER_RESULTS',
      payload: {stickerResults},
    })
  },

}

export default ServerActions;
