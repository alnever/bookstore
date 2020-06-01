const socket = (() => {
    let socket = new WebSocket("ws://localhost:8080/api/info")

    socket.onopen = () => {
        console.log("Socket opened")
    }

    socket.onclose = () => {
        console.log("Socket closed")
    }

    socket.onerror = (error) => {
        console.log("Socket error occurs ")
        console.log(error)
    }
    
    return socket;

})();

const onMessage = (socket, store) => evt => {
    console.log(evt.data)
}

export const WebSocketMiddleware = () => {
    return store => next => action => {
        // here I can send data via WS
        console.log(action);
        
        socket.onmessage = message => {
            console.log("Socket message")
            console.log(message)
            store.dispatch(JSON.parse(message.data))
        }        
        
        next({...action})
    }
}