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
      <div className='container wrapper'>
        <img src="http://media1.giphy.com/media/bSnMvxaVFfS0M/giphy.gif" className='bgCat'></img>
        <img src='http://media2.giphy.com/media/F47qASXDMJcOY/giphy.gif' className='bgjack'></img>
        <img src='http://media4.giphy.com/media/12m9Cf27trX9wA/giphy.gif' className='bgCat2'></img>
        <h1 className='text-center playTitle'>Gif Playground </h1>

        <ul className="nav nav-tabs">
          <li role="presentation" className={classNames({ active: path === '/'})}>
            <Link to='/'>Home</Link>
          </li>
          <li role="presentation" className={classNames({ active: path === '/search'})}>
            <Link to='/search'>Gif Search</Link>
          </li>
          <li role="presentation" className={classNames({ active: path === `/gifplayground/${this.props.params.id}`})}>
            <Link to={`/gifplayground/${this.props.params.id}`} >Playground</Link>
          </li>
          <li role='presentation' className={classNames({ active: path === '/screenshots'})}>
            <Link to='/screenshots'>Screen Shots</Link>
          </li>

        </ul>

        {this.props.children}

      </div>
    )
  }
}
