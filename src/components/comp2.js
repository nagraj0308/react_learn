import { Component } from "react";
import "./comp1.css";

class Comp2 extends Component {
    render() {
        const { items } = this.props;
        const itemlist = items.map(item => {
            return (
                <div className="main" key={item.key} >
                    <div>Name:{item.name}</div>
                    <div>Age:{item.age}</div>
                    <div>Gender:{item.gender}</div>
                </div>
            )
        })
        return <div className="main">
            {itemlist}
        </div>
    }
}
export default Comp2;