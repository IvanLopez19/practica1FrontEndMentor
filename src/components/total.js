import React,{Component} from 'react';
import Encabezado from './encabezado';
import Ranks from './ranks';
import Cards from './cards';

class Total extends Component{
    render(){
        return(
            <div>
            <Encabezado/>
            <Ranks/>
            <Cards/>
            </div>
        )
    }
}
export default Total;