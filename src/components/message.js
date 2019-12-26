import React from 'react'
import { withRouter } from 'react-router-dom'

function Message(props, {history}) {  

    return (
        <div className="container darker">
            <span onClick={() => history.push(`/profile/${props.user_id}`)} className="message-username">{props.username} - </span>
            <span className="message-text">{props.text} - </span>
            <span className="time-right">{new Date(props.date).toLocaleTimeString()}</span>

        </div>
    )
}

export default withRouter (Message)