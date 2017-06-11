import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const secondsInMinute = 60

export const Target = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${rotate360};
  animation-duration: ${props => secondsInMinute > 0 ? secondsInMinute / props.speed : 0}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

export const Label = styled.label`
  margin-top: 1.25rem;
  display: block;
`

export const Input = styled.input`
  margin-top: .625rem;
  padding: 0 .625rem;
  width: 10rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  background: rgba(0, 0, 0, .1);
  border: none;
  border-radius: .3125rem;
  outline: none;
`
