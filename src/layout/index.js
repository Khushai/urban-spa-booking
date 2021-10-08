import React from 'react';
import HeaderComponent from "./header"
import FooterComponent from "./footer"

function LayoutComponent({children}) {
  return(
    <>
        <HeaderComponent/>
        <div style={{height:'80%'}}>{children}</div>
        <FooterComponent/>
    </>
  )

}

export default LayoutComponent