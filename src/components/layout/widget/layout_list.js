import React from 'react'
import Header from './header'
import Banner from './banner'
import Controls from './controls'

const LayoutList = ({ children, currentPage }) => {
  return <div className='app'>
    <div></div>
    <div id='main-container'>
      <Header />
      <Banner />
      <div id='internal-list' >
        <Controls currentPage={currentPage} />
        {children}
        <Controls currentPage={currentPage} isFooter={true} />
      </div>
    </div>
    <div></div>
  </div>
}


export default LayoutList