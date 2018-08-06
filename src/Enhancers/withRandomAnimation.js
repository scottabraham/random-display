import React from 'react'
import {randomAnimationClass} from '../Modules/animation-helper'

const withRandomAnimation = (ChildComponent) => {
    return function(props) {
        return <ChildComponent {...props} className={randomAnimationClass()} />
    }
}

export default withRandomAnimation();