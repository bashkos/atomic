import React, { Component } from 'react'
import { Wrapper, Target, Label, Input } from './ui'

export default class Spinner extends Component {
  state = {
    speed: 20
  }

  _validateSpeed = speed => speed > 0 ? speed : 0

  _changeSpeed = e => this.setState({
    speed: this._validateSpeed(e.target.value)
  })

  render () {
    const { className, children } = this.props
    const { speed } = this.state

    return (
      <Wrapper className={className}>
        <Target speed={speed}>
          {children}
        </Target>
        <Label htmlFor='spinner-speed'>Number of revolutions per minute</Label>
        <Input id='spinner-speed' type='number' value={speed} onChange={this._changeSpeed} />
      </Wrapper>
    )
  }
}
