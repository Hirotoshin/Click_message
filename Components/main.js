import React from 'react';
import {AppList} from './memberlist';


export class Push extends React.Component{
    constructor(props){
        super();
        this.state={
            members:props.memberlist,
            showList:false
        };
    }

    Buttonclick(){
        this.setState((prevState,currentProp)=>{
            return{
                showList:!prevState.showList
            }
        });
    }



    render(){
        return(
            <div>
                <button onClick={this.Buttonclick.bind(this)}>push</button>
                {this.state.showList?<AppList />:null}
            </div>
        );
    }
    
}