import { useCallback, useState } from 'react'
import { useSocket } from '../../hooks/socket'

import './styles.css'

const Input = (props) => {
    const [message, setMessage] = useState('')
    const { frontToBack } = useSocket()

    const handleInputChange = useCallback(e => {
        setMessage(e.target.value)
    }, [])

    const handleFormSubmit = useCallback(e => {
        e.preventDefault()
        
        if (message.trim()) {
            frontToBack(props.id, message)

            setMessage('')
        }
    }, [message])
    
    return(
        <form className='form' onSubmit={handleFormSubmit} >
            <input
                onChange={handleInputChange}
                value={message}
                placeholder='Type a new message'
                type='text'
                className='form__field'
            />
        </form>
    )
}

export default Input