import React,{Component} from 'react';
import '../estilos/estilos.css';

class Card extends Component{
    render(){
        return(
            <div className='card'>
                <img clasName='imagen' src='../files/image-colton.jpg'/>
                <p className='nombre'>Colton Smith</p>
                <p className='text'>inienidnenednwidninedniedmniwndinedinwondondieniwendiendiwdnindiewndiewndieniewndiendwoeidn</p>
            </div> 
        )
    }
}

export default Card;