import React, {useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faFrown
} from "@fortawesome/free-solid-svg-icons";

const NotFound = (props) => {
const {handleNotFound} = props;

useEffect(() => {
    handleNotFound()
}, [])
  return (
    <div className='not-found'>
        <p>Path Not found </p>
        <FontAwesomeIcon icon={faFrown} />
    </div>
  )
}

export default NotFound