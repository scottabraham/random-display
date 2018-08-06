import React from 'react'
const withDragDrop = (ChildComponent) => {
    return function(props) {
        return <ChildComponent {...props} />
    }
}

export default withDragDrop