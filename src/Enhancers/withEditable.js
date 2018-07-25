import React from 'react'
const withEditable = (ChildComponent) => {
    return function(props) {
        return <div contentEditable={true}><ChildComponent {...props} className={'animated infinite bounce delay-2s'} /></div>
    }
}

export default withEditable;