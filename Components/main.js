import React from 'react';
import {List1} from './memberlist1';
import {List2} from "./memberlist2";


export class Push extends React.Component{
    constructor(props){
        super();
        this.state={
            members:props.memberlist1,
            showList:[false,false]

        };
    }

    Buttonclick(n){
        this.setState((prevState,currentProp)=>{
            const copyshowList = prevState.showList.slice();
            copyshowList[n] = !copyshowList[n];

            return{
                showList:copyshowList
            }
        });
    }



    render(){
        return(
            <div>
                <button onClick={this.Buttonclick.bind(this,0)}>push1</button>
                {this.state.showList[0]?<List1 />:null}
                <button onClick={this.Buttonclick.bind(this,1)}>push2</button>
                {this.state.showList[1]?<List2 />:null}
            </div>
        );
    }
    
}