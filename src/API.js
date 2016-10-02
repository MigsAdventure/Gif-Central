import { get } from 'axios'

import GifActions from './actions/GifActions'
import ServerActions from './actions/ServerActions'

const API = {
  receiveGifSearch(userInput) {
    get(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC&limit=64`)
    .then( response => {
      let gifSearchResults = response.data.data;
      gifSearchResults = gifSearchResults.map(gif => {
        let obj = {
          id: gif.id,
          rating: gif.rating,
          image: gif.images.downsized_large.url,
        }
        return obj;
      })
      ServerActions.sendSearchResults(gifSearchResults);

    })
    .catch( err => {
      console.log('Error!',err);
    })
  },

  receiveStickerSearch(stickerInput) {
    get(`http://api.giphy.com/v1/stickers/search?q=${stickerInput}&api_key=dc6zaTOxFJmzC&limit=100`)
    .then(response => {
      let stickerSearchResults = response.data.data;
      stickerSearchResults = stickerSearchResults.map(sticker => {
        let obj = {
          id: sticker.id,
          rating: sticker.rating,
          stickerImage: sticker.images.downsized_medium.url,
        }
        return obj;
      })
      ServerActions.sendStickerSearchResults(stickerSearchResults);
    })
    .catch(err => {
      console.log('err: ', err)
    })
  },

  receiveGifById(id) {
    get(`http://api.giphy.com/v1/gifs/${id}?api_key=dc6zaTOxFJmzC`)
    .then(responseId => {
      console.log(responseId)
    })
  }


}

export default API;
