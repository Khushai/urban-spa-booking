import React, {useContext} from 'react';
import { Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import BookingCart from '../components/booking-cart'
import {GlobalDispatchContext, GlobalStateContext} from "../context/globalContextProvider";




function HeaderComponent() {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext)
    const showDrawer = () => {
        dispatch({
          type: 'IS_CART_OPEN',
            payload:true,
        })
    };
    const onClose = () => {
        dispatch({
            type: 'IS_CART_OPEN',
            payload:false,
        })
    }
  return(
      <>
    <Menu mode="horizontal" theme={'dark'}>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />} style={{float:'right'}} onClick={showDrawer}>Cart  <span style={{
          border: "solid white",
          borderRadius:'60%',
          backgroundColor:'white',
          color:"black"

      }}>{Object.keys(state.listOfAddedItemsInCart).length}</span></Menu.Item>

    </Menu>
          <BookingCart onClose={onClose}/>
      </>
  )

}

export default HeaderComponent