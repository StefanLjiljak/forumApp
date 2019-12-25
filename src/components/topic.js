import React from 'react';
import {withRouter} from 'react-router-dom'
import Message from './message'

class Topic extends React.Component {
    constructor(){
        super();

        this.state={
            topic_id: ''
        }
        this.chooseTheme= this.chooseTheme.bind(this);
    }

    redirectToSpecificTopic = () => {
        const { history }= this.props;
        let topic_id=this.props.id;
        if (history) history.push(`/topic/${topic_id}`)

    }

    chooseTheme(){
        this.redirectToSpecificTopic();
    }

    render(){
        return(
            <div className='topic' onClick={(e)=>{
                e.preventDefault();
                this.setState({topic_id:this.props.match.params.topic_id})
                this.chooseTheme();
            }}>{this.props.theme}
            </div>
        )
    }
}

export default withRouter(Topic)