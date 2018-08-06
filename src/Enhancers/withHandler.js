import React, {Component} from 'react'

const withHandler = (handlerValues) => (ChildComponent) => {
    return class extends Component{

        componentDidMount(){
            this.setState({
                [handlerValues.key]:handlerValues.value
            }), this.value = handlerValues.value;
        }

        updateStateValue = (key) => (value) =>{
            this.setState({
                [key]:value
            })
            this.value = value;
        }

        render(){
            const dynamicProps = {[handlerValues.key]:this.value, [handlerValues.fn]: this.updateStateValue(handlerValues.key) };

            return(
                <ChildComponent {...this.props} {...dynamicProps} />
            )
        }
    }
}

export default withHandler