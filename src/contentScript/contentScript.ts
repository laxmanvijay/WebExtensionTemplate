import { REQUEST_TYPES } from "../constants";
import { IMessageType } from "../types";

window.onload = (event) => {
    console.log('Extension is fully loaded');
};

chrome.runtime.onMessage.addListener(function (request: IMessageType, sender, sendResponse) {    
    if (request.type === REQUEST_TYPES.PING) {   
        sendResponse({
            type: REQUEST_TYPES.PONG,
            data: "pong"
        })
    }
})
