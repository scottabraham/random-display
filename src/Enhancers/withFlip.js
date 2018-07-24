import React from 'react'
const withFlip = (ChildComponent) => {
    return function (props) {
        return <ChildComponent className={'animated flip delay-4s'} {...props}/>

    }
}
export default withFlip;