import styled from 'styled-components'
import palette from 'google-material-color/dist/palette'
import Spinner from '~components/Spinner'

export const Wrapper = styled.section`
  padding: 2.5rem;
  color: ${({ colorName }) => palette.get(colorName, 700)};
  background: ${({ colorName }) => palette.get(colorName, 200)};

  &:after {
    content: '';
    clear: both;
    display: block;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  text-align: center;
`

export const StyledSpinner = styled(Spinner)`
  margin-top: 2rem;

  Input {
    color: #fff;
    background-color: ${({ colorName }) => palette.get(colorName, 300)};
  }
`

export const Select = styled.select`
  margin-top: 2rem;
  float: right;
  color: inherit;
  background: none;
  border: none;
  outline: none;
`
