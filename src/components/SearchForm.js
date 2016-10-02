import React, { Component } from 'react'
// import SearchForm from './SearchForm'
// import SearchResults from './SearchResults'

import GifActions from '../actions/GifActions'

export default class SearchForm extends Component {
  constructor() {
    super();

    this._submitForm = this._submitForm.bind(this);
    // this._grabInput = this._grabInput.bind(this);
  }

  // _grabInput() {
  // }

  _submitForm(e) {
    e.preventDefault();

    let { searchInput } = this.refs;
    let input = searchInput.value;
    console.log('searchInput: ',input);

    GifActions.fetchGifSearch(input);
  }

  render() {
    return (
      <div>

        <form onSubmit={this._submitForm} className="form-inline">
          <div className="form-group">
            <label>Search Gif</label>
            <input ref='searchInput' type="text" className="form-control" placeholder="Category"/>
            {/* <input onChange={this._grabInput} ref='searchInput' type="text" className="form-control" placeholder="Category"/> */}
          </div>
          <button type="submit" className="btn btn-primary">Find Gif</button>
        </form>

      </div>
    )
  }
}
