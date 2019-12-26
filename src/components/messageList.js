import React from 'react'
import ReactDOM from 'react-dom'
import Message from './message'
import axios from 'axios'

class MessageList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            topic_id:this.props.match.params.topic_id,
            messages: []
        }

        axios.get(`https://coetus.herokuapp.com/api/forum/message/${this.state.topic_id}`)
        .then((response) => {
            console.log('response', response);
            this.setState({...this.state, messages:response.data.messages})
        })
        .catch((error) => {
            this.setState({error:true})
        })
    
    }


    
    render() {
        return (
            <>

            <div className="message-list">
                {this.state.messages.map((message) => {
                    return (
                        <>
                        <Message key={message.message_id} username={message.username} text={message.message.toString()} 
                        date={message.timestamp}/>
                        </>
                        
                    )
                })}
            </div>
            </>
        )
    }
}

export default MessageList