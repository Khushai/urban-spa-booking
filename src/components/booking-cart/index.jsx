import React, {useContext, useState, useEffect} from "react";
import {Drawer, Divider,Button} from 'antd'
import {GlobalStateContext ,GlobalDispatchContext} from "../../context/globalContextProvider";
import {ItemHeading,CarItemDetails} from './styled';
import WorkerComponent from "../workers/workers";
import {StyledButton} from "../styled";
import {filterAvailableWorkersBySlotId,fetchAvailableWorker} from "../handleAvailableWorkers";

function BookingCart({onClose}){
    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);
    const [isEditEnable , setIsEditEnable] = useState(false);
    const [selectedWorker , setSelectedWorker] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [availableWorker, setAvailableWorker] = useState(null);
    const [slotId, setSlotId] = useState(null);

    useEffect(() => {
        fetchAvailableWorker(setAvailableWorker);
        return(() => {
            availableWorker(null)
        })
    },[])
  const removeItemFromCart = (slotId) => {
      const copyOfCartItems = state.listOfAddedItemsInCart;
      delete copyOfCartItems[slotId];
      dispatch({
          type:'ADD_TO_CART',
          payload:copyOfCartItems
      })
  };

    const handleOnWorkerSelect = (e) => {
        setSelectedSlot([{...selectedSlot, selectedWorker:e.target.value}])
        setSelectedWorker(e.target.value);
    }
    const EditCartItem =  (slotId) => {
        const availableWorkers= filterAvailableWorkersBySlotId(state.totalWorkers, availableWorker, slotId)
        dispatch({
            type:'ADD_WORKERS',
            payload:availableWorkers
        })
        setSlotId(slotId)
        setIsEditEnable(true)

    }
console.log(selectedWorker)
    const UpdateCart = () => {
        const copyOfCartItems = state.listOfAddedItemsInCart;
        const cartItem = copyOfCartItems[slotId.toNumber()];
        cartItem.workerName = selectedWorker.name;
        dispatch({
            type:'ADD_TO_CART',
            payload:copyOfCartItems
        });
        setIsEditEnable(false);
    }
    return(
        <Drawer title="Your Basket" placement="right" onClose={onClose} visible={state.isCartOpen} width={500}>
            {!isEditEnable ? (
                Object.keys(state.listOfAddedItemsInCart).length > 0 ? (
                    Object.keys(state.listOfAddedItemsInCart).map((key) => {
                        const cartItem = state.listOfAddedItemsInCart[key];

                        return(
                            <div key={`itemId_${key}`}>
                                <ItemHeading>Spa treatment combo</ItemHeading>
                                <CarItemDetails>{cartItem.time} o'clock, For {cartItem.price} <br/>
                                    with {cartItem.workerName}
                                </CarItemDetails>
                                <div>
                                    <Button shape='round' onClick={() => removeItemFromCart(parseInt(key))} type="danger">Remove</Button>
                                    <StyledButton shape='round' onClick={() => EditCartItem(parseInt(key))}>Edit</StyledButton>
                                </div>
                                <Divider/>
                            </div>
                        )
                    })
                ):(
                    <p>No Item added</p>
                )
            ):(
                <>
                    <WorkerComponent selectedWorker={selectedWorker} handleOnWorkerSelect={handleOnWorkerSelect}/>
                    <Divider/>
                    <StyledButton shape='round' onClick={() => UpdateCart()} disabled={selectedWorker === null}>Save Changes</StyledButton>
                    <StyledButton shape='round' onClick={() => setIsEditEnable(false)}>Cancel</StyledButton>
                </>
            )}

        </Drawer>
    )
}

export default BookingCart