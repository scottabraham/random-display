import React, {Component, Fragment} from 'react'
import './app.css'
import ImageComponent from './Components/image'
import withRandomPosition from './Enhancers/withRandomPosition'
import withState from './Enhancers/withState'
import withFadeIn from './Enhancers/withFadeIn'
import withEditable from './Enhancers/withEditable'
import withRandomImage from './Enhancers/withRandomImage'
import withRoundComponent from './Enhancers/withRoundComponent'
import withClickBounce from './Enhancers/withClickBounce'
const TextComponent = (props) => <h2 className={props.className} style={props.style}>{props.text}</h2>


const ComposedImage = withState({key:'className', value:'', fn:'setClassName'})(withClickBounce(withRoundComponent(withRandomImage(withFadeIn(withRandomPosition((ImageComponent)))))))
const ComposedText = withEditable(withRandomPosition((TextComponent)))


class App extends Component{

    constructor(props){
        super(props);
        this.state=({
            components: []
        })
        this.handleOnClick = this.handleOnClick.bind(this);
        this.clearState = this.clearState.bind(this);

    }

    clearState(){
        this.setState({
            components: []
        })
    }

    handleOnClick(){

        const Image = <ComposedImage style={{border:'1px solid white'}} />;
        this.setState({
            components: this.state.components.concat(Image)
        })

    }

    render (){
        return(
            <div className={'app'}>
                <input type={'button'} onClick={this.handleOnClick} value={'Click'} />
                <input type={'button'} onClick={this.clearState} value={'Clear'} />
                <span style={{color: 'yellow'}}>{this.state.components.length}</span>
                {this.state.components.map((Component, index) => <div key={index}>{Component}</div>)}
            </div>
        )
    }
}

export default App