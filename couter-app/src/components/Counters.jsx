import Counter from "./Counter";
import React, { Component} from "react";


export class Counters extends Component{
    constructor(){
        super();
        this.state = {
            counters:[
                { id:1 , value:11},
                { id:2 , value:22},
                { id:3 , value:33},
                { id:4 , value:44},
            ]
        }
    }


    render() {
        return ( 
            <div>
                {this.state.counters.map((counter)=>(
                    <Counter key={counter.id} value={counter.value}/>
                ))}
            </div>
        );
    }
}
export default Counters;