import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Topic from './topic'


const Topics= ()=> {
    
    const [topics, setTopics]=useState([])

    useEffect(() => {
        axios.get('https://coetus.herokuapp.com/api/forum/topics')
        .then((response) => { 
            console.log(response.data)
            setTopics(response.data.topics)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    
    return (
        
        topics.map(topic => {
        return (<><Topic key={topic.topic_id} theme={topic.title.toString()} id={topic.topic_id}/>
        </>
            )
            
        })
        )
}
    



export default Topics;
