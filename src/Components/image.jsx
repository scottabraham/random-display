import React from 'react'

const ImageComponent = (props) => <img src={props.src} alt={props.alt} className={props.className} style={props.style} onClick={props.onClick} />

export default ImageComponent