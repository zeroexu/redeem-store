import React from 'react'
import CounterItems from './counter_items'
import Sorter from './sorter'
import NavigatorPage from './navigator_page'


const Controls = ({ isFooter = false, currentPage }) => {
  return <div id='controls'>
    <CounterItems currentPage={currentPage} />
    <div>
      {!isFooter &&
        <Sorter />
      }
    </div>
    <NavigatorPage />
  </div>
}

export default Controls