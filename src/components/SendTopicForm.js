import React from 'react'
import Axios from 'axios'

class SendTopicForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            user_id: '',
            title: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            title: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        Axios.put('https://coetus.herokuapp.com/api/forum/topics',
        {
            user_id: "jole",
            title:this.state.title,
            
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
                    <h3>Add new topic</h3>
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="Type your topic title..."
                    type="text" />
                    <button>Add topic</button>
            </form>
        )
    }
}

export default SendTopicForm