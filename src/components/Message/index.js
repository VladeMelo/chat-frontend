import './styles.css'

const Message = (props) => {
    
    return(
        <li
            className={`list__item list__item--${props.data.id === props.id ? 'mine' : 'other'}`}
            key={props.index}
        >
            <span className={`message message--${props.data.id === props.id ? 'mine' : 'other'}`}>
                { props.data.message }
            </span>
        </li>
    )
}

export default Message