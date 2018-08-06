import React from 'react'
const withFlip = (ChildComponent) => {
    return function (props) {
        return <ChildComponent {...props} className={'animated flip delay-4s'} />

    }
}
export default withFlip;