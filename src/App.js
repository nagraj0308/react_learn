import './App.css';
import React from 'react';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import Comp3 from './components/comp3';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QueryForm from './components/form';
// import Default from "./components/Default.component";
// import { Custom404 } from "./components/custom404";

class App extends React.Component {
  
  state = {
    name: "NagRaj",
    mobile: "7060196036",
    no: 0,
    msg: "Message",
    items: [
      { name: "A", age: "34", gender: "M", key: 1 },
      { name: "B", age: "29", gender: "F", key: 2 },
      { name: "C", age: "23", gender: "M", key: 3 }
    ]
  }

      
  onChangeNoClick = (e) => {
    this.setState({ no: Math.random() * 10 });
    console.log(this.state);
  }
  onBtnSubmit = (e) => {
    e.preventDefault();
    this.setState({ msg: "Button submit clicked" });
  }
  onNameChange = (e) => {
    this.setState({ name: e.target.value });
    console.log("hd");
  }

  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route path="/home/" component={()=><Comp1 name="Boy" age="23" gender="Male" />} />
      //     <Route path="/comp2/" component={Comp2} />

      //   </Switch>
      // </Router>


      <div className="main" >
        <h1>{this.state.name}</h1>
        <h2>{this.state.mobile}</h2>
        <p id="p1">{this.state.no}</p>
        <button id='buttonChangeNo' onClick={this.onChangeNoClick}>change no</button>
        <form>
          <p id="p2">{this.state.msg}</p>
          <input type="text" placeholder="enter name" onChange="this.onNameChange" />
          <input type="number" placeholder="age" />
          <Comp1 name="Boy" age="23" gender="Male" />
          <Comp1 name="Girl" age="22" gender="Female" />
          <Comp2 items={this.state.items} />
          <Comp3 items={this.state.items} />
          <QueryForm/>
          <button id='btnSubmit' type="submit" onClick={this.onBtnSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
