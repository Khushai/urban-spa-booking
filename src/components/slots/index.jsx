import React, {useContext} from 'react';
import {TimeSlotContainer,Price} from './styled'
import {GlobalDispatchContext, GlobalStateContext} from '../../context/globalContextProvider'
import {filterAvailableWorkersBySlotId} from "../handleAvailableWorkers";


function TimeSlots({slot,availableWorker}) {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext)
    const handleTimeSlots = async (slotId) => {
      const availableWorkers=  filterAvailableWorkersBySlotId(state.totalWorkers, availableWorker, slotId);
        dispatch({
            type:'ADD_WORKERS',
            payload:availableWorkers
        })
        dispatch({
            type:'ADD_TIME_SLOT',
            payload:slot
        });
        dispatch({
            type:'DISABLE_SLOT',
            payload:slotId
        })
        }
    return(
        <>
        <TimeSlotContainer data-testid="Slot" onClick={() => handleTimeSlots(slot.id)} disabled={state.isSlotDisable === slot.id}>
            <span>{slot.localisedTime}</span>
            <Price>{slot.price}</Price>
        </TimeSlotContainer>
        </>
    )
}

export default TimeSlots