import React, { useContext, useState } from 'react'
import { Context } from '../../../public_store/index'
import coinSrc from '../../../assets/icons/coin.svg'
const { getUserInfo } = require('../../../utils/index')
const validUserData = (user) => {
  return (user !== undefined && user.name !== undefined)
}

const UserPreview = ({ user = {} }) => {
  const { store, dispatch } = useContext(Context)
  const [isRequesting, setIsRequesting] = useState(false)

  if (!validUserData(store.user)) {
    if (!isRequesting) {
      setIsRequesting(true)
      getUserInfo(dispatch, store.token)
    }
    return <div className='user-preview'>
      <div className='user-name'><h3>...Loading...</h3></div>
    </div>
  }

  const { name, points } = store.user
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