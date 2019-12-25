import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        topics: null
    }

    getThemes = () => {
        axios.get('https://coetus.herokuapp.com/api/forum/topics')
        .then((response) => { 
            this.setState({topics:response.data.topics})
        })
        .catch((error) => {
           console.log(error)
        })
    }

    componentDidMount() {
        this.getThemes()
    }
    render() {
        const { topics } = this.state
        console.log(topics)
        return (
            <div>

            </div>
        )
    }
}

export default Home;
