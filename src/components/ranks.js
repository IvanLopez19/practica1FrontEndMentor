import React,{Component} from 'react';
import Rank from './rank';

class Ranks extends Component{
    render(){
        return(
            <div className='ranks'>
                <Rank text='Rated 5 Stars in Reviews'/>
                <Rank text='Rated 5 Stars in Report Guru'/>
                <Rank text='Rated 5 Stars in BestTech'/>
            </div>
        )
    }
}

export default Ranks;