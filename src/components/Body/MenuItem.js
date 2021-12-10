import React from "react";
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle} from 'reactstrap';
const MenuItem=props=>{

  // console.log(props);
   return(
       <div>
          <Card style={{marginTop:"10px"}}
           onClick={props.dishSelect}>
             <CardBody>
                 <CardImg  width="100%" src={props.dish.image}></CardImg>
                 <CardImgOverlay>
                     <CardTitle>
                        {props.dish.category}
                     </CardTitle>
                 </CardImgOverlay>
             </CardBody>
          </Card>
       </div>
   );

}

export default MenuItem;