import axios from "axios";


export const SDK = {
    get: async (symbol)=> {
        let stack = await axios.get(`/depth?symbol=${symbol}&limit=500`);
        return stack.data;
    },
    subscribe: function(symbol)  {
        const $bus = require('./eventBus');
        let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
        return ws
    }
};