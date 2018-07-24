import React from 'react'
const withEditable = (ChildComponent) => {
    return function(props) {
        return <div contentEditable={true}><ChildComponent className={'animated infinite bounce delay-2s'} {...props}/></div>
    }
}

export default withEditable;