import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BtnUpdate } from './Counter'
import DisplayCounter from './DisplayCounter'

class App extends Component {
  state = {
    treble: 0,
    medium: 0,
    bass: 0,
    volume: 0,
  }

  updateState = (amount, field) => {
    console.log(amount)
    this.setState({
      [field]: this.state[field] + amount,
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
                  {Object.keys(this.state).map((el) => {
                    return (
                      <div key={el}>
                        <h1>{el}</h1>
                        <div className="flex">
                          <BtnUpdate
                            amount={-1}
                            field={el}
                            update={this.updateState}
                          />
                          <DisplayCounter count={this.state[el]} />
                          <BtnUpdate
                            amount={1}
                            field={el}
                            update={this.updateState}
                          />
                        </div>
                      </div>
                    )
                  })}
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
