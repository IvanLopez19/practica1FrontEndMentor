import React,{Component} from 'react';

class Rank extends Component{
    render(){
        return(
            <div className='rank'>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <p>{this.props.text}</p>
                
            </div>
        )
    }
}

export default Rank;