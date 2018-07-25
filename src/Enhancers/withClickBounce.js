import React, {Component} from 'react'
const withClickBounce = (ChildComponent) => {
    return class extends Component{

        constructor(props){
            super(props)
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick(){
            {this.props.setClassName('animated infinite bounce delay-2s')}
        }

        render(){

            return(
                <ChildComponent {...this.props} onClick={this.handleClick} />
            )
        }
    }
}

export default withClickBounce;