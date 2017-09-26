import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstComponent from './components/first_component';
import SecondComponent from './components/second_component';
import MyStateComponent from './components/state_component';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
class App extends Component{

    render(){
        return (
            <div>
                <h2>React Basic Concepts!!!</h2>
                    <h4>Route Example Ref index.js</h4>
                <BrowserRouter>
                <div>
                <nav className="navbar navbar-default">
                 <div className="container-fluid">
                <div className="navbar-header">
              <a className="navbar-brand" >React Basics</a>
             </div>
        <ul className="nav navbar-nav">
           <li><Link to='/'>Class Component</Link></li>
           <li><Link to='/function-example'>Functional Component </Link></li>
           <li><Link to='/state-example'>State and Props </Link></li>
        </ul>
            </div>
              </nav>
                <Switch>
                    <Route path="/class-example" component={FirstComponent} />
                    <Route path="/function-example" component={SecondComponent} />
                    <Route path="/state-example" component={MyStateComponent} />
                    <Route path="/" component={FirstComponent} />
                </Switch>
                </div>
                </BrowserRouter>   
            </div>
        )
    }
}

ReactDOM.render(<App />, 
    document.getElementById('root'));

