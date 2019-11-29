import React, { useContext, useState } from 'react'
import { Context } from '../../../public_store/index'
import { Link } from 'react-router-dom'
import { getNextpage, showNextButton, showPrevButton, getPrevPage } from '../lib/sorters'
import backIcon from '../../../assets/icons/arrow-left.svg'
import fowardIcon from '../../../assets/icons/arrow-right.svg'

const NavigatorPage = ({ currentPage }) => {
  const { store, dispatch } = useContext(Context)
  const nextPage = getNextpage(currentPage, store.products.length)
  console.log("nextPage", nextPage, currentPage)
  const prevPage = getPrevPage(currentPage, store.products.length)
  const showNext = showNextButton(currentPage, store.products.length)
  const showPrev = showPrevButton(currentPage, store.products.length)

  return <div className='navigator-page'>
    <ButtonNavigation src={backIcon} route={'/page/' + prevPage} show={showPrev} />
    <ButtonNavigation src={fowardIcon} route={'/page/' + nextPage} show={showNext} />
  </div>
}

const ButtonNavigation = ({ src, route, show = false }) => {
  if (!show) {
    return <div></div>
  }

  return <Link to={route}>
    <button>
      <img src={src} alt='navigation button' />
    </button>
  </Link>
}

export default NavigatorPage