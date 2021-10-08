import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen }from '@testing-library/react';
import SpaBooking from "../index";
import fetchMock from 'jest-fetch-mock'
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/globalContextProvider'
import TimeSlots from "../../slots";


describe('spa-booking', () => {
    const mockResponse = {
        "workers": [
            {
                "id": 1,
                "name": "Maxwell Smith",
                "rating": "4.1",
                "isNew": false
            },
            {
                "id": 2,
                "name": "Ellouise Riddle",
                "rating": "4.6",
                "isNew": true
            },
            {
                "id": 3,
                "name": "Asad Reese",
                "rating": "2.5",
                "isNew": false
            },
            ]
    }
    const mockWorkerResponse = {
        "available-workers": [
            {
                "slot_id": 1,
                "availableWorker_ids": [
                    1,
                    2,
                    7
                ]
            },
            {
                "slot_id": 2,
                "availableWorker_ids": [
                    4,
                    8,
                    10
                ]
            },
            {
                "slot_id": 3,
                "availableWorker_ids": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ]
            },
    ]
    }

    const mockAvailableWorkerResponse = {

        "available-workers": [
            {
                "slot_id": 1,
                "availableWorker_ids": [
                    1,
                    2,
                    7
                ]
            },
            {
                "slot_id": 2,
                "availableWorker_ids": [
                    4,
                    8,
                    10
                ]
            },
            {
                "slot_id": 3,
                "availableWorker_ids": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ]
            }
            ]
    }

    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    })
    beforeEach(() => {
        fetchMock.get(`https://storage.googleapis.com/urban-technical/workers.json`, mockResponse);
        fetchMock.mock(`https://storage.googleapis.com/urban-technical/available-workers.json`, mockWorkerResponse);
        fetchMock(` https://storage.googleapis.com/urban-technical/available-workers.json`, mockAvailableWorkerResponse);
    });

const dispatch = jest.fn();
const state = {
    slot:null,
    workers:[],
    isSlotDisable:-1,
    listOfAddedItemsInCart: {},
    totalWorkers:[],
    isCartOpen:false,
}

    const setup = () => {
        const booking =(
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    <SpaBooking />
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>

        )

        return {
            ...booking,
        };
    };

    it('render spa booking componet', () => {
      const {debug} =  render(setup())
        debug()
    })

})