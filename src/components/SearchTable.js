import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import GifActions from '../actions/GifActions'
import SearchStore from '../stores/SearchStore';

export default class SearchTable extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.state = {
      results: SearchStore.getSearchResults()
    }
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: SearchStore.getSearchResults()
    })
  }

  _getId(id,image) {
    GifActions.sendImage(image);
    browserHistory.push(`/gifplayground/${id}`);
  }

  render() {
    let {results} = this.state;

    return (
      <div>

              {
                results.map((gif, i) => (
                  <div key={i}  className='col-xs-3 searchImageContainer'><img id={gif.id} onClick={() => this._getId(gif.id, gif.image)} className='searchImage' src={gif.image}/></div>

                ))
              }
      </div>
    )
  }

}
