import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen }from '@testing-library/react';
import TimeSlots from "../index";
import fetchMock from 'jest-fetch-mock'
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/globalContextProvider'


describe('Time slots', () => {
    const availableWorker = [
        {
            availableWorker_ids: [
                 1,
                 2,
                 7
            ]
        }
    ]

    const slot = {
        id: 7,
        localisedTime: "15:00",
        price: "£87.00"
    }
const props ={
    availableWorker,
    slot
}
    const setup = () => {
        const timeSlot =(
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    <TimeSlots {...props}/>
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        )

        return {
            ...timeSlot,
        };
    };

const state = {
    slot:null,
    workers:[],
    isSlotDisable:-1
}
const dispatch = jest.fn();
    it('should render time slot', () => {
       render(setup());
        const time = screen.getByText('15:00');
        const price= screen.getByText('£87.00');
        expect(time).toBeInTheDocument();
        expect(price).toBeInTheDocument()
    })
})