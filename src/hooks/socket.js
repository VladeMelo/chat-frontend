import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:8080', { transports: ['websocket'] })

const SocketContext = createContext()

export const SocketProvider = (props) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('chat.message', newMessage => {
            setMessages([...messages, newMessage])
            console.log(socket.id)
        })
    }, [messages])

    const frontToBack = useCallback((id, message) => { // manda a mensagem para o back
        socket.emit('chat.message', { id, message })
    }, [])

    return (
        <SocketContext.Provider
            value={{
                messagesHook: messages,
                frontToBack
            }}
        >
            {props.children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    const context = useContext(SocketContext);
  
    if (!context) {
      // se o AuthContext não foi criado, ou seja, caso não haja .Provider ao redor
      throw new Error('The context must be used within an .Provider');
    }
  
    return context;
}