import React, {Component} from 'react'
import './app.css'
import ImageComponent from './Components/image'
import Oscar from './images/HeyOrca_Logo.png'
import withRoundComponent from './Enhancers/withRoundComponent'

// We're now composing our image from the basic component and a HOC
const ComposedImage = withRoundComponent(ImageComponent)

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
        const Image = <ComposedImage src={Oscar}/>
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