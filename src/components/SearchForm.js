import React, { Component } from 'react'

import GifActions from '../actions/GifActions'

export default class SearchForm extends Component {
  constructor() {
    super();

    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e) {
    e.preventDefault();

    let { searchInput } = this.refs;
    let input = searchInput.value;

    GifActions.fetchGifSearch(input);
  }

  render() {
    return (
      <div>

        <form onSubmit={this._submitForm} className="form-inline">
          <div className="form-group">
            <input ref='searchInput' type="text" className="form-control text-center" placeholder="Search Gif"/>
          </div>
          <button type="submit" className="btn btn-primary">Find Gif</button>
        </form>

      </div>
    )
  }
}
