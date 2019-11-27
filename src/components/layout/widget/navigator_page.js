import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../../../assets/icons/arrow-left.svg'
import fowardIcon from '../../../assets/icons/arrow-right.svg'

const NavigatorPage = ({ back = 0, foward = 0 }) => {
  return <div className='navigator-page'>
    <ButtonNavigation src={backIcon} route='' />
    <ButtonNavigation src={fowardIcon} route='' />
  </div>
}

const ButtonNavigation = ({ src, route }) => {
  return <Link to={route}>
    <button>
      <img src={src} alt='navigation button' />
    </button>
  </Link>
}

export default NavigatorPage