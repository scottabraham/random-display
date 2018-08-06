import React, {Component} from 'react'
import './app.css'
import ImageComponent from './Components/image'
import withRandomPosition from './Enhancers/withRandomPosition'
import withState from './Enhancers/withState'
import withFadeIn from './Enhancers/withFadeIn'
import withRandomImage from './Enhancers/withRandomImage'
import withRoundComponent from './Enhancers/withRoundComponent'
import withClickBounce from './Enhancers/withClickBounce'
import dogimage from './images/dog.png'
const classNameState = withState({key:'className', value:'', fn:'setClassName'})
const isBouncingState = withState({key:'isBouncing', value:false, fn:'setIsBouncing'})

const ComposedImage = isBouncingState(classNameState(withClickBounce(withRoundComponent(withRandomImage(withFadeIn(withRandomPosition(ImageComponent)))))))



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
        const Image = <ComposedImage src={dogimage} style={{border:'3px solid white'}} />;
        this.setState({
            components: this.state.components.concat(Image)
        })

    }

    render (){
        return(
            <div className={'app'}>
                <input type={'button'} onClick={this.handleOnClick} value={'Click'} className={'btn'} />
                <div style={{width:'10px', display:'inline-block'}}/>
                <input type={'button'} onClick={this.clearState} value={'Clear'} className={'btn'} />
                <div style={{width:'10px', display:'inline-block'}}/>
                <span style={{fontSize: '20pt',color: 'yellow'}}>{this.state.components.length}</span>
                {this.state.components.map((Component, index) => <div key={index}>{Component}</div>)}
            </div>
        )
    }
}

export default App