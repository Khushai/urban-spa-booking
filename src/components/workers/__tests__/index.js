import React from "react";
import {render} from '@testing-library/react';
import Workers from "../index";
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/globalContextProvider'



const dispatch = jest.fn();
const state = {
    isCartOpen:false,
    isSlotDisable:1,
    listOfAddedItemsInCart:{},
    slot:{
        id: 1,
        localisedTime: "12:00",
        price: "£81.00"
    },
    totalWorkers:[
        {id: 1, name: "Maxwell Smith", rating: "4.1", isNew: false},
        {id: 2, name: "Ellouise Riddle", rating: "4.6", isNew: true},
        {id: 3, name: "Asad Reese", rating: "2.5", isNew: false},
        {id: 4, name: "Sabrina Leal", rating: "5", isNew: false},
        {id: 5, name: "Ifan Hewitt", rating: "3.7", isNew: true},
        {id: 7, name: "Usaamah Mccall", rating: "5", isNew: false}
    ],
    workers:[
        {id: 1, name: "Maxwell Smith", rating: "4.1", isNew: false},
        {id: 2, name: "Ellouise Riddle", rating: "4.6", isNew: true},
        {id: 7, name: "Usaamah Mccall", rating: "5", isNew: false}
    ]
}
describe('workers ', () => {
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
    jest.mock('../../../images/worker-image.jpeg')
    const setup = () => {
        const detail =(
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    <Workers/>
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        )

        return {
            ...detail,
        };
    };


    it('should render the worker container when slot has data', () =>{
       const {getByTestId} =  render(setup())
        const w = getByTestId('workerContainer')
        expect(w).toBeVisible()
    });
})