import React from 'react'

const CounterItems = ({ index = 0, offset = 0 }) => {
  return <div id='counter-list'>{index} of {offset}</div>
}

export default CounterItems