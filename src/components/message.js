import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

function Message(props) {  

    return (
        <div className="message">
            <span className="message-username">{props.username} - </span>
            <span className="message-text">{props.text} - </span>
            <span className="message-text">{props.date}</span>

        </div>
    )
}

export default withRouter (Message)