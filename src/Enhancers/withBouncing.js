import React from 'react'
const withBouncing = (ChildComponent) => {
    return function(props) {
        return <ChildComponent {...props} className={'animated infinite bounce delay-2s'} />
    }
}

export default withBouncing;