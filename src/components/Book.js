import React from "react";
import '../stylesheets/Book.css'
const Book=(props)=>{
    console.log(props);
    return(
       <div className="Book">
           <h1 onClick={props.delete}>{props.bookName}</h1>
           <h1>{props.writer}</h1>
           <input onChange={props.change} type="text"/>
       </div>
    );
}

export default Book;