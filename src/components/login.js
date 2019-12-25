import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username:'',
        password:'',
        error:false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://coetus.herokuapp.com/api/forum/users',
        {
            username:this.state.username, 
            password:this.state.password
        })
        .then((response) => {
            this.props.history.push('/topics')     
        })
        .catch((error) => {
            this.setState({error:true})
        })
    }
    render() {
        const { error }  = this.state
        let errorMessage;

        if(error) {
            errorMessage =  <p>Errorrrrrrr</p>
        }
        return (
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={(e)=>this.setState({username:e.target.value})}
                        required
                        />
                    <input 
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(e)=>this.setState({password:e.target.value})}
                        required
                        />
                    <button>Sign in</button>
                    <button><Link to="/register">Register</Link></button>
                </form>
                {errorMessage}
            </div>
        )
    }
}

export default withRouter(Login)
