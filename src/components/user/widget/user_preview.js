import React from 'react'
import coinSrc from '../../../assets/icons/coin.svg'
const validUserData = (user) => {
  return user && user.name && user.points
}

const UserPreview = ({ user = {} }) => {
  if (!validUserData(user)) {
    return <div className='user-preview'>
      <div className='user-name'><h3>Sin Usuario sin autorizacion</h3></div>
    </div>
  }

  const { name, points } = user
  return <div className='user-preview'>
    <div className='user-name'>
      <h3>{name}</h3>
    </div>
    <div className='user-points'>
      <h3>{points}</h3>
      <img src={coinSrc} alt='coin' />
    </div>
  </div>
}

export default UserPreview

/**
 *
 * user/me:
 *
 * {
    "_id": "5dddb989b01b9d006c529e48",
    "name": "John Kite",
    "points": 2000,
    "__v": 0,
    "redeemHistory": [],
    "createDate": "2019-11-26T23:47:21.091Z"
  }
 *
 */