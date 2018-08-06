import React, {Component} from 'react'

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