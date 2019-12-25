import React, { Component } from 'react'
import axios  from 'axios'
import { withRouter } from 'react-router-dom';


class Register extends Component  {
    state = {
        name:'',
        surname:'',
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        success:false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://coetus.herokuapp.com/api/forum/users',
        {
            name:this.state.name,
            surname:this.state.surname,
            username:this.state.username,
            email:this.state.email, 
            password:this.state.password,
        })
        .then((response) => {
              this.setState({success:true})  
              this.handleSuccess()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handleSuccess = () => {
        if(this.state.success) {
            setTimeout(() => {
                this.props.history.push('/login')
            },1500)  
        }
    }
    render() {
        const { success } = this.state
        let successMessage;

        if(success) {
            successMessage = <p>Success</p>
        }
        return (
            <div className="register-container">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <input 
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={(e)=>this.setState({name:e.target.value})}
                        required
                        />
                    <input 
                        type="text"
                        name="surname"
                        placeholder="surname"
                        onChange={(e)=>this.setState({surname:e.target.value})}
                        required
                        />
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={(e)=>this.setState({username:e.target.value})}
                        required
                        /> 
                    <input 
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={(e)=>this.setState({email:e.target.value})}
                        required
                        />
                    <input 
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(e)=>this.setState({password:e.target.value})}
                        required
                        />
                    <input 
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password"
                        onChange={(e)=>this.setState({confirmPassword:e.target.value})}
                        required
                        />
                    <button>Sign in</button>
                </form>
                {successMessage}
            </div>
        )
    }
 }
  

export default withRouter(Register)