import { useEffect, useState } from 'react';

import Input from './components/Input'
import Message from './components/Message'
 
import { useSocket } from './hooks/socket'

import './App.css';

const id = Math.floor(Math.random() * 100)

const App = () => {
  const [messages, setMessages] = useState([])
  const { messagesHook } = useSocket()

  useEffect(() => {
    setMessages(messagesHook)
  }, [messagesHook])

  return (
    <main className="container">
      <ul className="list">
          
        {messages.map((message, index) => (
          <Message
            index={index}
            data={message}
            id={id}
          />
        ))}

      </ul>
      
      <Input
        id={id}
      />

    </main>
  );
}

export default App;
