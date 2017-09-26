import React,{Component} from 'react';
import MyPropsComponent from './props_component';

//For State We have to use Class based componet
class MyStateComponent extends Component {
    constructor(props){
        super(props)
        //To use state we have to initialize the state
        this.state={'myText':''};
        this.onInputChange=this.onInputChange.bind(this);
    }

    render(){
        return (
            <div>
                <h4>Below is state example Reference components/state_components.js</h4>
                <input value={this.state.myText} onChange={this.onInputChange} />
                <p>Output from state: {this.state.myText}</p>

                <MyPropsComponent myText={this.state.myText}/>
            </div>
        )
    }

    //OnChange call this method

    onInputChange(event){
        this.setState({myText:event.target.value})
    }
}

export default MyStateComponent;