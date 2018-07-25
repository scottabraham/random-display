import React, {Component} from 'react'


const withState = (myProps) => (ChildComponent) => {
    return class extends Component{

        componentDidMount(){
            this.setState({
                [myProps.key]:myProps.value
            }), this.value = myProps.value;
        }

        updateStateValue = (key) => (value) =>{
            this.setState({
                [key]:value
            })
            this.value = value;
        }


        render(){
            const dynamicProps = {[myProps.key]:this.value, [myProps.fn]: this.updateStateValue(myProps.key) };

            return(
                <ChildComponent {...this.props} {...dynamicProps} />
            )
        }
    }
}

export default withState;