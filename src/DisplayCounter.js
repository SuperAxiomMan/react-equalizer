import React, { Component } from 'react'

class DisplayCounter extends Component {
  render() {
    return (
      <h1 className="p-2 m-4 text-4x1 font-bold text-center text-red-600">
        {this.props.count}
      </h1> 
    )
  }
}

export default DisplayCounter
