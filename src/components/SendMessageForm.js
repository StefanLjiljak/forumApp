import React from 'react'
import Axios from 'axios'

class SendMessageForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            topic_id: this.props.match.params.topic_id,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        Axios.put('https://coetus.herokuapp.com/api/forum/message',
        {
            username: "jole",
            topic_id:this.state.topic_id,
            message:this.state.message,
            
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message..."
                    type="text" />
                    <button>Add message</button>
            </form>
        )
    }
}

export default SendMessageForm