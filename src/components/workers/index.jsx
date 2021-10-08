import React, {useContext, useState} from 'react';
import { Divider ,Row, Col} from 'antd';
import {TimeSlotSection,TimeCost} from './styled'
import {GlobalDispatchContext, GlobalStateContext} from "../../context/globalContextProvider";
import WorkerComponent from "./workers";
import {StyledButton} from '../styled'



function Workers(){
    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext)
   const [selectedWorker, setSelectedWorker] = useState(null);

    const handleOnWorkerSelect = (e) => {
        setSelectedWorker(e.target.value);
    }
console.log(state.workers[0])
    const AddItemToCart = () => {
        const slot = state.slot
        const cartItem = {
            slotId:slot.id,
            time:slot.localisedTime,
            price:slot.price,
            workerName:selectedWorker.name
        }
       state.listOfAddedItemsInCart[slot.id] = cartItem;

        dispatch({
            type:'ADD_TO_CART',
            payload:state.listOfAddedItemsInCart
        })
        dispatch({
            type: 'IS_CART_OPEN',
            payload:true,
        })
    }


    return(
        <>
            {state.slot!== null && (
                <div data-testid="workerContainer">
                    <h3>You have chosen:</h3>
                    <Divider />
                    <TimeSlotSection>
                        <>
                            <b>Spa treatment combo</b>
                            <TimeCost >{state.slot.localisedTime},   <span>{state.slot.price}</span></TimeCost>
                        </>
                    </TimeSlotSection>

                    <div>
                        <h4>Select Spa therapist</h4>
                        <Divider />
                        <WorkerComponent selectedWorker={selectedWorker} handleOnWorkerSelect={handleOnWorkerSelect}/>
                        <Row>
                            {state.slot && state.workers.length > 0 &&(
                                <Col xs={12} lg={8}>
                                    <StyledButton block shape={'round'} onClick={AddItemToCart} disabled={selectedWorker === null}>Add to Cart</StyledButton>
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
            )}
        </>
    )
}

export default Workers;