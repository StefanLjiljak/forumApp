import React from 'react'
import { withRouter } from 'react-router-dom'

function Message(props) {  

    return (
        <div className="message">
            <span className="message-username">{props.username} - </span>
            <span className="message-text">{props.text} - </span>
            <span className="message-date">{new Date(props.date).toLocaleTimeString()}</span>

        </div>
    )
}

export default withRouter (Message)