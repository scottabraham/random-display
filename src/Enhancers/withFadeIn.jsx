import React from 'react'
const withFadeIn = (ChildComponent) => {
    return function (props) {
        return <ChildComponent {...props} className={props.className ? props.className : props.setClassName('animated fadeIn')} />
    }
}
export default withFadeIn;