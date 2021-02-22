import React,{Component} from 'react';
import Card from './card';

class Cards extends Component{
    render(){
        return(
            <div>
            <Card name='Colton Smith' text='"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"' imagen="../files/colton.jpg"/>
            <Card name='Irene Roberts' text='"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."'
    imagen="../files/irene.jpg"/>
            <Card name='Anne Wallace' text='"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"'
    imagen="../files/anne.jpg"/>
            </div>
        )
    }
}

export default Cards