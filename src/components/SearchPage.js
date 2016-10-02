import React, { Component } from 'react'

import SearchForm from './SearchForm'
import SearchTable from './SearchTable'

export default class SearchPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <div className='row'>
          <SearchForm />
        </div>
        <div className='row'>
          <SearchTable />
        </div>

      </div>
    )
  }
}
