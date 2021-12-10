import React,{Component} from "react";
// JSX code ke compile korete hole react ke import karte habe
// function Person()
// {
//   return React.createElement('h1',null,'Sri Lanka');
// }

// let Person=(props)=>{
//     console.log(props)
//     return (
//        <div>
//            <h3>Name:{props.name}</h3>
//            <h3>Age:{props.age}</h3>
//            <h4>Extra:{props.children}</h4>
//        </div>
//     );
// }
class Person extends Component{
    // constructor(props)
    // {   
    //     super(props)

    // }
    render()
    {
        
        return (
                <div>
                    <h3>Name:{this.props.name}</h3>
                    <h3>Age:{this.props.age}</h3>
                    <h4>Extra:{this.props.children}</h4>
                  </div>
             );
    }
}

export default Person;