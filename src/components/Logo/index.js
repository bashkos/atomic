import React from 'react'

const Logo = ({ width, height, palette }) => (
  <svg width={width} height={height}>
    <circle
      cx='50%'
      cy='50%'
      r='40%'
      fill='none'
      stroke={palette.orbitColor}
      strokeWidth='2%'
    />
    <circle
      cx='77.5%'
      cy='22.5%'
      r='10%'
      fill={palette.electronColor}
      stroke={palette.backgroundColor}
      strokeWidth='4%'
    />
    <circle cx='50%' cy='50%' r='20%' fill={palette.coreColor} />
  </svg>
)

Logo.defaultProps = {
  width: 100,
  height: 100,
  palette: {
    electronColor: 'gold',
    orbitColor: 'salmon',
    coreColor: 'skyblue',
    backgroundColor: 'white'
  }
}

export default Logo
