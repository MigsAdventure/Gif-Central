import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _searchResults = [];
let _imageUrl = '';
let _stickerResults = [];
let _stickerPackages = [];
let _canvases = [];

class SearchStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch (type) {

        case 'RECEIVE_SEARCH_RESULTS':
        _searchResults = payload.gifResults;
        this.emit('CHANGE');
        break;

        case 'SEND_URL':
        _imageUrl = payload.url;
        this.emit('CHANGE');
        break;

        case 'RECEIVE_STICKER_RESULTS':
        _stickerResults = payload.stickerResults;
        this.emit('CHANGE')
        break;

        case 'SEND_STICKER_IMG':
        _stickerPackages.push(payload.stickerPackage);
        console.log('_stickerPackages in store: ', _stickerPackages)
        this.emit('CHANGE');
        break;

        case 'SEND_PROMISE':
        _canvases.push(payload.myPackage);
        this.emit('CHANGE');
        break;

        case 'REMOVE_SHOT':
        let x = _canvases.filter( promise => {
          if (promise.id === payload.id) {
            promise.promise.then( canvas => {
              canvas.outerHTML = '';
            }
          )
            return;
          } else {
            return promise;
          }
        })
        _canvases = x;
        this.emit('CHANGE');
        break;

        case 'REMOVE_STICKER':
        let undeletedStickers = _stickerPackages.filter( sticker => {
          if (payload.id === sticker.id) {
            return;
          } else {
            return sticker;
          }
        })
        _stickerPackages = undeletedStickers;
        this.emit('CHANGE');
        break;

      }
    })

    //storage
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getSearchResults() {
    return _searchResults;
  }

  getImageUrl() {
    return _imageUrl;
  }

  getStickerResults() {
    return _stickerResults;
  }

  getStickerPackage() {
    return _stickerPackages;
  }

  getCanvases() {
    return _canvases;
  }

}

export default new SearchStore();
