import React, { useState } from "react";
import { REQUEST_TYPES } from "../../../constants";
import { IMessageType } from "../../../types";

export const HomeWidget = () => { 
    const [msg, setMsg] = useState<string | undefined>(undefined);

    const clickHandler = () => {
        chrome?.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
            chrome?.tabs.sendMessage(tabs[0].id, {
                type: REQUEST_TYPES.PING,
                data: "ping"
            } as IMessageType, (resp: IMessageType) => {
                console.log(resp)
                setMsg(resp.data)
            });
        })
    }

    return (
        <div className='mt-4 mx-6 flex h-[550px] justify-center items-center flex-col'>
            <button className='px-3 py-2 rounded bg-black text-white hover:bg-gray-800' onClick={clickHandler}>
                Send Ping to Content Script
            </button>
            {msg && <p className='text-green-500 text-md mt-3 font-light text-center'>Message from content script: {msg}</p>}
        </div>
    )
}