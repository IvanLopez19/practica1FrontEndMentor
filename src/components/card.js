import React,{Component} from 'react';
import '../estilos/estilos.css';

class Card extends Component{
    render(){
        return(
            <div className='card'>
                <img clasName='imagen' src= {this.props.imagen}/>
                <h2 className='nombre'>{this.props.name}</h2>
                <p className='text'>{this.props.text}</p>
            </div> 
        )
    }
}

export default Card;