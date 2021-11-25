import { Component } from "react";
import "./comp1.css";

class Comp1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div className=".main" >
                <div>Name:{this.props.name}</div>
                <div>Name:{this.props.age}</div>
                <div>Name:{this.props.gender}</div>
            </div>
        )
    }
}
export default Comp1;