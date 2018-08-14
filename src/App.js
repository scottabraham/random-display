import React, {Component} from 'react'
import './app.css'
import ImageComponent from './Components/image'
import Oscar from './images/HeyOrca_Logo.png'
import withRoundComponent from './Enhancers/withRoundComponent'
import withRandomPosition from './Enhancers/withRandomPosition'
import withRandomImage from './Enhancers/withRandomImage'
import withClickBounce from './Enhancers/withClickBounce'
import withState from './Enhancers/withState'
import { compose, mapProps } from 'recompose'

const classNameState = withState({key: 'className', value: '', fn: 'setClassName'})
const isAnimatingState = withState({key: 'isAnimating', value: false, fn: 'setIsAnimating'})

/*
  I changed the name of my isBouncingState and setIsBouncing state
  so that I could utilise mapProps to transform the props that
  are in my app into the prop that the HOC needs to work.

  mapBouncingProps takes the current props and transforms them.

*/
const mapBouncingProps = mapProps(props => {
    const {isAnimating, setIsAnimating, ...newProps} = props; // newProps won't contain isAnimating, setIsAnimating
    return {
      ...newProps,
      isBouncing: isAnimating,
      setIsBouncing: setIsAnimating,
      randomProp: 'Bob Smith'
    }
  }
)

const enhance = compose(
  classNameState,
  isAnimatingState,
  mapBouncingProps,
  withClickBounce,
  withRandomImage,
  withRandomPosition,
  withRoundComponent
)

// We're now composing our image from the basic component and a HOC
const ComposedImage = enhance(ImageComponent)

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

        // Create a new Composed Image and add it to State
        const Image = <ComposedImage src={Oscar} style={{border: '2px solid white'}}/>
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