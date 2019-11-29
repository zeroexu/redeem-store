import React, { useContext, useState } from 'react'
import { Context } from '../../../../public_store/index'
import ConfirmDialog from '../../../layout/widget/confirm_dialog'
import srcCoin from '../../../../assets/icons/coin.svg'
import srcBuyWhite from '../../../../assets/icons/buy-white.svg'
import { buyProduct } from '../../../../utils/index'

const InnerModalCard = ({ price, id, show, }) => {
  const { store, dispatch } = useContext(Context)
  const [isOpenedModal, setIsOpenedModal] = useState(false)
  if (!show) {
    return <div style={{ display: 'none' }}></div>
  }


  const activateDialog = () => {
    setIsOpenedModal(true)
  }

  const callbackYes = () => {
    setIsOpenedModal(false)
    buyProduct(dispatch, store.token, id)
  }

  const callbackNo = () => {
    setIsOpenedModal(false)
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
      <button onClick={activateDialog}>Redeem Now</button>
    </div>

    <ConfirmDialog question='Are you sure?' callbackYes={callbackYes} callbackNo={callbackNo} isOpenedModal={isOpenedModal} />


  </div>
}

export default InnerModalCard
