import React, {Component, Fragment} from 'react'

import DogComponent from './Components/dog'
import withRandomPosition from './Enhancers/withRandomPosition'
import withBouncing from './Enhancers/withBouncing'
import withEditable from './Enhancers/withEditable'

const TextComponent = (props) => <h2 className={props.className} style={props.style}>{props.text}</h2>

const ComposedDog = withBouncing(withRandomPosition((DogComponent)))
const ComposedText = withEditable(withRandomPosition((TextComponent)))


class App extends Component{

    constructor(props){
        super(props);
        this.state=({
            components: []
        })
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        const Dog = <ComposedDog/>;
        this.setState({
            components: this.state.components.concat(Dog)
        })
    }

    render (){
        return(
            <div>
                <input type={'button'} onClick={this.handleOnClick} value={'Click'} />
                <span>{this.state.components.length}</span>
                {this.state.components.map((Component, index) => <div key={index}>{Component}</div>)}
            </div>
        )
    }
}

export default App