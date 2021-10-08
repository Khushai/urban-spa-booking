import  React from "react";
import {Row, Col} from 'antd'
import SpaBooking from "../components/spa-booking";
import Workers from "../components/workers"
import LayoutComponent from "../layout";

const IndexPage = () => {
  return (
      <LayoutComponent>
    <div style={{margin:'100px 10px 120px 10px'}}>
        <title>Urban Spa booking</title>
        <Row>
            <Col xs={{span:24} } lg={{span:11, offset:1}}>
                <h2 style={{textAlign:'center'}}>Spa booking</h2>
                <SpaBooking/>
            </Col>
            <Col xs={24} lg={12}>
               <Workers/>
            </Col>
        </Row>
    </div>
      </LayoutComponent>
  )
}

export default IndexPage
