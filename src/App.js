import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BtnDecrease } from './Counter'
import { BtnIncrease } from './Counter'
import DisplayCounter from './DisplayCounter'

class App extends Component {
  state = {
    treble: 0,
    medium: 0,
    bass: 0,
    volume: 0,
  }

  updateTreble = (amount) => {
    console.log(amount)
    this.setState({
      treble: this.state.treble + amount,
    })
  }
  updateMedium = (amount) => {
    console.log(amount)
    this.setState({
      medium: this.state.medium + amount,
    })
  }
  UpdateBass = (amount) => {
    console.log(amount)
    this.setState({
      bass: this.state.bass + amount,
    })
  }
  UpdateVolume = (amount) => {
    console.log(amount)
    this.setState({
      volume: this.state.volume + amount,
    })
  }
  render() {
    return (
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Base TPK APP
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <div className="text-center">
                  <h1>TREBLE</h1>
                  <div className="flex">
                    <BtnDecrease update={this.updateTreble} />
                    <DisplayCounter count={this.state.treble} />
                    <BtnIncrease update={this.updateTreble} />
                  </div>
                  <h1>MEDIUM</h1>
                  <div className="flex">
                    <BtnDecrease update={this.updateMedium} />
                    <DisplayCounter count={this.state.medium} />
                    <BtnIncrease update={this.updateMedium} />
                  </div>
                  <h1>BASS</h1>
                  <div className="flex">
                    <BtnDecrease update={this.UpdateBass} />
                    <DisplayCounter count={this.state.bass} />
                    <BtnIncrease update={this.UpdateBass} />
                  </div>
                  <h1>Volume</h1>
                  <div className="flex">
                    <BtnDecrease update={this.UpdateVolume} />
                    <DisplayCounter count={this.state.volume} />
                    <BtnIncrease update={this.UpdateVolume} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
