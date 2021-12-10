import React from 'react';
import {Card,CardImg,CardBody,CardText} from 'reactstrap';


const DishDetail=(props)=>
{
   console.log(props.dish)
 
   return(
       <div style={{marginTop:"10px"}}>
           <Card>
              <CardImg src={props.dish.image}></CardImg>
              <CardBody>
                  <CardText>{props.dish.description}</CardText>
                  <CardText>{props.dish.price}</CardText>
              </CardBody>
             </Card>
       </div>
   )
}

export default DishDetail;