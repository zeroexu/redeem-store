import React from 'react'
import Header from './header'
import Banner from './banner'
import Controls from './controls'

const LayoutList = ({ children }) => {
  return <div className='app'>
    <div></div>
    <div id='main-container'>
      <Header />
      <Banner />
      <div id='internal-list' >
        <Controls />
        {children}
        <Controls isFooter={true} />
      </div>
    </div>
    <div></div>
  </div>
}


export default LayoutList