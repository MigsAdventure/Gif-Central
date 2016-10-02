import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname;
    // console.log('path: ',path)
    // console.log('props: ',this.props)

    // let searchClasses = classNames({ active: path === '/search'})

    return (
      <div className='container'>
        <h1 className='text-center'>Gif Central</h1>

        <ul className="nav nav-tabs">
          <li role="presentation" className={classNames({ active: path === '/search'})}>
            <Link to='/search'>Search Page</Link>
          </li>
          <li role="presentation" className={classNames({ active: path === `/gifplayground/${this.props.params.id}`})}>
            <Link to={`/gifplayground/${this.props.params.id}`} >Gif Playground</Link>
          </li>

        </ul>

        {this.props.children}

      </div>
    )
  }
}
