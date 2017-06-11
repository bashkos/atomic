import React from 'react'
import { injectGlobal } from 'styled-components'
import Introduction from '~components/Introduction'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 1.33vw;
  }
  body {
    margin: 0;
  }
  input,
  select,
  textarea {
    font-family: inherit;
    color: inherit;
  }
`

const App = () => (
  <Introduction />
)

export default App
