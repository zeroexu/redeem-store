import React from 'react'
import CounterItems from './counter_items'
import Sorter from './sorter'
import NavigatorPage from './navigator_page'


const Controls = ({ isFooter = false }) => {
  return <div id='controls'>
    <CounterItems />
    <div>
      {!isFooter &&
        <Sorter />
      }
    </div>
    <NavigatorPage />
  </div>
}

export default Controls