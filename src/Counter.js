import React, { Component } from 'react'

export class BtnIncrease extends Component {
  render() {
    return (
      <div className="mx-auto">
        <p className="flex m-4">
          <button
            type="button"
            className="px-3 py-1 mr-3 text-white bg-blue-500 rounded"
            onClick={() => this.props.update(1)}
          >
            +1
          </button>
        </p>
      </div>
    )
  }
}

export class BtnDecrease extends Component {
  render() {
    return (
      <div className="mx-auto">
        <p className="flex m-4">
          <button
            type="button"
            className="px-3 py-1 mr-3 text-white bg-blue-500 rounded"
            onClick={() => this.props.update(-1)}
          >
            -1
          </button>
        </p>
      </div>
    )
  }
}
