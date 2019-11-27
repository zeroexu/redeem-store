import React from 'react'
const { mostRecentCallback, lowestPriceCallback, highetCallback } = require('../lib/sorters')

const Sorter = () => {
  return <div id="sorter">
    Sort by:
    <button className='active' onClick={mostRecentCallback} >Most recent</button>
    <button className='inactive' onClick={lowestPriceCallback}>Lowest price</button>
    <button className='inactive' onClick={highetCallback}>Highestprice</button>
  </div>
}

export default Sorter