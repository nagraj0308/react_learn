import React from "react";
import { Component } from "react";

class LifeCycle extends Component {
    constructor(){
        console.log("constructor");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentDidCatch(){
        console.log("componentDidCatch");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
    }
    render(){
        return (
            <div className="main" key={item.key} >
                <div>Name:{item.name}</div>
                <div>Age:{item.age}</div>
                <div>Gender:{item.gender}</div>
            </div>
        )
    }
}
export default LifeCycle;