import React, {useContext, useEffect, useState} from 'react';
import {SpaWrapper,SpaContainer} from './styled';
import {GlobalDispatchContext} from "../../context/globalContextProvider";
import {Row, Col, message} from 'antd'
import {fetchAvailableWorker} from "../handleAvailableWorkers";

import TimeSlots from '../slots'


function SpaBooking(){
    const [timeSlots, setTimeSlots] = useState([])
    const [availableWorker, setAvailableWorker] = useState(null);
    const dispatch = useContext(GlobalDispatchContext)


    useEffect(() => {
        fetch('https://storage.googleapis.com/urban-technical/slots.json',{
            method: 'GET',
        }).then(response => response.json()).then((res) => setTimeSlots(res.slots)).catch((() =>  message.warning('Not able fetch time slots. Please try again!'))) // parse JSON from request



        fetch('https://storage.googleapis.com/urban-technical/workers.json',{
            method: 'GET',
        }).then(response => response.json()).then((res) =>dispatch({
            type:'TOTAL_WORKERS',
            payload:res.workers
        })).catch((() =>  message.warning('Not able fetch total worker. Please try again!'))) ;

        fetchAvailableWorker(setAvailableWorker)

        return () => {
            setAvailableWorker(null);
            setTimeSlots(null)
            dispatch({
                type:'TOTAL_WORKERS',
                payload:null
            });
        }
    }, [])
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    return(
        <SpaWrapper>
                    <SpaContainer title={`${year} - ${month} - ${date}`} type="inner" >
                        <Row>
                            {
                                timeSlots && timeSlots.map(slot => (
                                    <Col xs={24} lg={{span:12, offset:6}} key={`slot_${slot.id}`}>
                                        <TimeSlots slot={slot} timeSlots={timeSlots}  availableWorker={availableWorker}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </SpaContainer>

        </SpaWrapper>
    )
}

export default SpaBooking
