import React from 'react'
import srcCoin from '../../../../assets/icons/coin.svg'

const InnerModalCard = ({ price, id }) => {
  return <div className='inner-modal-menu'>
    <div>
      {price}<img src={srcCoin} alt='coin' />
    </div>
    <div>
      <button >Redeem Now</button>
    </div>
  </div>
}

export default InnerModalCard
