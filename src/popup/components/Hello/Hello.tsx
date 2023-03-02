import React, { useEffect } from 'react'
import { REQUEST_TYPES } from '../../../constants'
import { IMessageType } from '../../../types'

export interface IHelloProps {
    name: string;
}

export const Hello = ({ name }: IHelloProps) => {

    const clickHandler = () => {
        chrome?.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
            chrome?.tabs.sendMessage(tabs[0].id, {
                type: REQUEST_TYPES.PING,
                data: "ping"
            } as IMessageType, (resp) => {
                console.log(resp)
            });
        })
    }

    return (
        <div className='mt-4 mx-6'>
            <p>Hello {name}</p>
            <button onClick={clickHandler}>Click me!</button>
        </div>
    )
}