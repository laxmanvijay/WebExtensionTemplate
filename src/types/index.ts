import { REQUEST_TYPES } from "../constants";

export interface IMessageType {
    type: REQUEST_TYPES,
    data: string;
}