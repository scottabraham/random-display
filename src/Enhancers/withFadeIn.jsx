import React from 'react'
const withFadeIn = (ChildComponent) => {
    return function (props) {
        return <ChildComponent {...props} className={'animated fadeIn'} />

    }
}
export default withFadeIn;