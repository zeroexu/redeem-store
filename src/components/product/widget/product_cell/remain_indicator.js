import React from 'react'
import srcCoin from '../../../../assets/icons/coin.svg'

const RemainIndicator = ({ price }) => {
  return <div className='remain-indicator'>
    You need {price} <img src={srcCoin} alt={'coin'} />
  </div>
}

export default RemainIndicator