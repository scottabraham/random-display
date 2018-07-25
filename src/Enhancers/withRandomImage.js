import React, {Component} from "react";

const withRandomImage = (ChildComponent) => {
    return class extends Component{

        constructor(props){
            super(props)
            this.state=({src:''})
        }

        componentDidMount(){
            fetch('https://source.unsplash.com/random/200x200')
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