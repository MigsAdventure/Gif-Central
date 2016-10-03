import React, {Component} from 'react'
import uuid from 'uuid';

import GifActions from '../actions/GifActions'
import SearchStore from '../stores/SearchStore'


export default class ScreenShots extends Component {
  constructor() {
    super();

    this.state = {
      canvases : SearchStore.getCanvases(),
      trigger: true,
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      canvases: SearchStore.getCanvases(),
    })
  }

  componentWillUpdate() {
    this.setState({
      trigger: true,
    })
  }

  _removeShot(id) {
    let {trigger} = this.state;
    GifActions.removeShot(id);

    this.setState({
      trigger: false,
    })
  }

  render() {
    let {canvases} = this.state;

    return (
      <div id='sanityDiv'>
        <h1>ScreenShots</h1>
        {
          canvases.map((shot, i) => {

            shot.promise.then(canvas => {
              canvas.setAttribute('id', shot.id);
              document.getElementById('sanityDiv').appendChild(canvas);


            })
            return (
              <button key={shot.id} onClick={() => this._removeShot(shot.id)}> X </button>
            );
          })
        }
      </div>
    )
  }
}
