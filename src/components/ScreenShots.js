import React, {Component} from 'react'
import SearchStore from '../stores/SearchStore'

export default class ScreenShots extends Component {
  constructor() {
    super();

    this.state = {
      canvases : SearchStore.getCanvases(),
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

  render() {
    let {canvases} = this.state;
    console.log('canvas in screenshots:, ', canvases)
    return (
      <div>
     <h1>ScreenShots</h1>
     {canvases}
        {/*{
          canvases.map((shot, i) => (
            <div key={i}>{shot}</div>
          ))
        }*/}
      </div>
      )
  }
}