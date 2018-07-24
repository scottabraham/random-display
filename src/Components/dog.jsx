import React from 'react'
import dogImage from '../images/dog.png'

const DogComponent = (props) => <img src={props.src || dogImage} alt={props.alt} className={props.className} style={props.style} onClick={props.onClick} />

export default DogComponent