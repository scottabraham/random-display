import React, {Component} from 'react'
const withClickBounce = (ChildComponent) => {
    return class extends Component{

        constructor(props){
            super(props)
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick(){
            if(this.props.isBouncing===true){
                this.props.setIsBouncing(false)
                this.props.setClassName('');

            } else{
                this.props.setClassName('animated infinite bounce delay-2s')
                this.props.setIsBouncing(true);
            }
        }

        render(){
            return(
                <ChildComponent {...this.props} onClick={this.handleClick} />
            )
        }
    }
}

export default withClickBounce;