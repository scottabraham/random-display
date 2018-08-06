import React from 'react'
const withRoundComponent = (ChildComponent) => {
    return function (props) {
        const style = {...props.style, borderRadius: '50%'}
        return <ChildComponent {...props} style={style}  />

    }
}
export default withRoundComponent;