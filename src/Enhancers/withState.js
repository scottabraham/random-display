import React, {Component} from 'react'

/*
    stateValues:
        key: Name of the state item
        value: Initial value
        fn: The name of the function returned to update state

    returns:
    dynamicProps:
        key: value
        fn: (update function)
 */

const withState = (stateValues) => (ChildComponent) => {
    return class extends Component{

        componentDidMount(){
            this.setState({
                [stateValues.key]:stateValues.value
            }), this.value = stateValues.value
        }

        updateStateValue = (key) => (value) =>{
            this.setState({
                [key]:value
            })
            this.value = value;
        }

        render(){
            const dynamicProps = {[stateValues.key]:this.value, [stateValues.fn]: this.updateStateValue(stateValues.key) };

            return(
                <ChildComponent {...this.props} {...dynamicProps} />
            )
        }
    }
}

export default withState;