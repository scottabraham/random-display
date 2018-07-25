import React, {Component} from "react";

const withRandomPosition = (ChildComponent) => {
    return class extends Component{

        getRandom(min, max){
            return Math.floor(Math.random() * max) + min
        }

        render(){
            const topPos = this.getRandom(0,window.innerHeight);
            const leftPos = this.getRandom(0,window.innerWidth);
            const style = {...this.props.style, position:'absolute', top:topPos, left:leftPos}

            return(
                <ChildComponent {...this.props} style={style} />
            )
        }
    }
}

export default withRandomPosition