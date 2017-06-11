import React, { Component } from 'react'
import palette from 'google-material-color/dist/palette'
import Logo from '~components/Logo'
import { Wrapper, Title, StyledSpinner, Select } from './ui'

export default class Introduction extends Component {
  state = {
    colorName: 'Brown'
  }

  _colors = [
    'Brown',
    'Blue Grey'
  ]

  _selectColor = e => this.setState({
    colorName: e.target.value
  })

  render () {
    const { colorName } = this.state
    const logoPalette = {
      electronColor: palette.get(colorName, 400),
      orbitColor: palette.get(colorName, 300),
      coreColor: palette.get(colorName, 500),
      backgroundColor: palette.get(colorName, 200)
    }

    return (
      <Wrapper colorName={colorName}>
        <Title>Atomic Design Boilerplate</Title>
        <StyledSpinner colorName={colorName}>
          <Logo width='6.25rem' height='6.25rem' palette={logoPalette} />
        </StyledSpinner>
        <Select value={colorName} onChange={this._selectColor}>
          {this._colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </Select>
      </Wrapper>
    )
  }
}
