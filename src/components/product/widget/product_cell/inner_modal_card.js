import React from 'react'
import srcCoin from '../../../../assets/icons/coin.svg'
import srcBuyWhite from '../../../../assets/icons/buy-white.svg'

const InnerModalCard = ({ price, id, show }) => {
  if (!show) {
    return <div style={{ display: 'none' }}></div>
  }

  return <div className='inner-modal-menu'>
    <div className='buy-container'>
      <button className='buy-floater'>
        <img src={srcBuyWhite} alt='buy button' />
      </button>
    </div>
    <div className='preview-price'>
      <h2>{price}</h2><img src={srcCoin} alt='coin' />
    </div>
    <div className='redeem-button'>
      <button >Redeem Now</button>
    </div>
  </div>
}

export default InnerModalCard
