import React from 'react'
import UserPreview from '../../user/widget/user_preview'
import logo from '../../../assets/logo.svg'

const Header = () => {
  return <div id='header'>
    <div className='logo'>
      <img src={logo} alt='logo' />
    </div>
    <UserPreview />
  </div>
}


export default Header