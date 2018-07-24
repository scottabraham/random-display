import React from 'react'
const withBouncing = (ChildComponent) => {
    return function(props) {
        return <ChildComponent className={'animated infinite bounce delay-2s'} {...props}/>
    }
}

export default withBouncing;