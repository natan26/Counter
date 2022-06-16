import React, { Component } from "react";


export class Counter extends Component{
    constructor(props) {
        super(props);
        this.state={
            value: this.props.value,

        }

        
    }
    handleIncrement = () =>{
        this.setState({value : this.state.value + 1})
    }
    render() {
        return(
            <>
            <div className="counter">
                <span className="bg-primary">{this.state.value}</span>
                <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
            </>
        )
    }
}

export default Counter;