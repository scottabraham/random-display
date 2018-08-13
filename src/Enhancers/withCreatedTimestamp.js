import React from 'react'
const withCreatedTimestamp = (ChildComponent) => {
    return function (props) {
        return <ChildComponent {...props} alt={props.createdTimestamp} />
    }
}
export default withCreatedTimestamp;