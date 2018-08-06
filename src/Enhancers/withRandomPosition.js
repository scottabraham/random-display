import React, {Component} from "react";

const withRandomPosition = (ChildComponent) => {
    return class extends Component{

        constructor(props){
            super(props);
            this.state=({
                topPos: null,
                leftPos: null
            })
        }

        componentDidMount(){
            const topPos = this.getRandom(0,window.innerHeight);
            const leftPos = this.getRandom(0,window.innerWidth);
            this.setState({
                topPos,
                leftPos
            })
        }

        getRandom(min, max){
            return Math.floor(Math.random() * max) + min
        }

        render(){
            const style = {...this.props.style, position:'absolute', top:this.state.topPos, left:this.state.leftPos}

            return(
                <ChildComponent {...this.props} style={style} />
            )
        }
    }
}

export default withRandomPosition