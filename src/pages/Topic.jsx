import React, {useState, useEffect} from 'react'
import TopicC from '../components/Topic/TopicC';
const Topic = ({topicViewHandler, data, toggleLoginModal}) => {


    useEffect(() => {
        topicViewHandler();
    }, [])

  return (
    <div className='topic-container'>
        <TopicC data={data} toggleLoginModal={toggleLoginModal}/>
    </div>
  )
}

export default Topic