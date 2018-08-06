import React, {Component} from "react";
import loader from '../images/ajax-loader.gif'

const withRandomImage = (ChildComponent) => {
    return class extends Component{

        constructor(props){
            super(props)
            this.state=({src:loader})
        }

        componentDidMount(){
            fetch('https://picsum.photos/200?random')
                .then(function(response) {
                    return response.url
                }).then((url) => this.setState({src:url}))
        }

         render(){
            return(
                <ChildComponent {...this.props} src={this.state.src}  />
            )
        }
    }
}

export default withRandomImage